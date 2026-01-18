import { NextResponse } from 'next/server';
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
        const { amount } = await request.json();

        const order = await razorpay.orders.create({
            amount: amount * 100, // Amount in smallest currency unit
            currency: 'USD',
            receipt: 'receipt_' + Math.random().toString(36).substring(7),
        });

        return NextResponse.json({ orderId: order.id }, { status: 200 });
    } catch (error) {
        console.error('Error creating order:', error);
        return NextResponse.json(
            { error: 'Error creating order found' },
            { status: 500 }
        );
    }
}
