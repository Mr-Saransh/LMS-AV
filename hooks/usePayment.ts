import { useState } from 'react';

interface RazorpayOptions {
    key: string;
    amount: number;
    currency: string;
    name: string;
    description: string;
    order_id: string;
    handler: (response: {
        razorpay_payment_id: string;
        razorpay_order_id: string;
        razorpay_signature: string;
    }) => void;
    notes: {
        courseName: string;
        customerName: string;
    };
    prefill: {
        name: string;
        email: string;
        contact: string;
    };
    theme: {
        color: string;
    };
}

interface RazorpayInstance {
    open: () => void;
}

declare global {
    interface Window {
        Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
    }
}

export const usePayment = () => {
    const [loading, setLoading] = useState(false);

    const loadScript = (src: string) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePayment = async (amount: number, courseName: string) => {
        setLoading(true);
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            setLoading(false);
            return;
        }

        // Detect if user is in India (more robust check)
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const isIndia = tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta';
        const currency = isIndia ? 'INR' : 'USD';

        console.log(`Payment detection: Timezone=${tz}, Selected Currency=${currency}`);

        try {
            const response = await fetch('/api/razorpay', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount, currency }),
            });

            const data = await response.json();

            if (!response.ok) {
                console.error("Order creation failed:", data);
                alert(`Payment initialization failed: ${data.error || 'Unknown error'}`);
                return;
            }

            const options: RazorpayOptions = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_1234567890',
                amount: data.amount * 100, // Use the amount returned by the server (converted if INR)
                currency: data.currency,
                name: 'Apni Vidya',
                description: `Enrollment for ${courseName}`,
                order_id: data.orderId,
                handler: function (response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) {
                    alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}. Redirecting to WhatsApp Group...`);
                    window.open('https://chat.whatsapp.com/Kjd64mv4bJuAY4TrnvaoyI', '_blank');
                    // Verify payment on backend here
                },
                notes: {
                    courseName: courseName,
                    customerName: 'Student', // Ideally this would come from a form
                },
                prefill: {
                    name: 'Student Name',
                    email: 'student@example.com',
                    contact: '9999999999',
                },
                theme: {
                    color: '#2563eb',
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            console.error("Payment error", error);
            alert("Something went wrong with payment init.");
        } finally {
            setLoading(false);
        }
    };

    return { handlePayment, loading };
};
