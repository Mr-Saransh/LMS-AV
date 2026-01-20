import { useState } from 'react';

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Razorpay: any;
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

        try {
            const response = await fetch('/api/razorpay', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount }),
            });

            const data = await response.json();

            if (!response.ok) {
                console.error("Order creation failed:", data);
                alert(`Payment initialization failed: ${data.error || 'Unknown error'}`);
                return;
            }

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_1234567890',
                amount: amount * 100, // Amount in cents/paise
                currency: 'USD',
                name: 'Apni Vidya',
                description: `Enrollment for ${courseName}`,
                order_id: data.orderId,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                handler: function (response: any) {
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
