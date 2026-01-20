import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import Razorpay from 'razorpay';

export async function POST(request: Request) {
    const key_id = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_id || !key_secret) {
        console.error("Razorpay Error: Missing environment variables.");
        return NextResponse.json(
            { error: 'Server misconfiguration: Missing Razorpay keys.' },
            { status: 500 }
        );
    }

    const razorpay = new Razorpay({
        key_id: key_id,
        key_secret: key_secret,
    });

    try {
        const { amount, currency = 'USD' } = await request.json();

        // If currency is INR, we convert the USD amount (e.g. $1 -> ₹85)
        // You can adjust this conversion rate as needed.
        let finalAmount = amount;
        if (currency === 'INR') {
            finalAmount = amount * 85;
        }

        const order = await razorpay.orders.create({
            amount: Math.round(finalAmount * 100), // Amount in smallest currency unit (cents or paise)
            currency: currency,
            receipt: 'receipt_' + Math.random().toString(36).substring(7),
        });

        return NextResponse.json({
            orderId: order.id,
            currency: currency,
            amount: finalAmount
        }, { status: 200 });
    } catch (error) {
        console.error('Error creating order:', error);
        return NextResponse.json(
            { error: 'Error creating order found' },
            { status: 500 }
        );
    }
}
