import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_1234567890', // Mock/Env key
    key_secret: process.env.RAZORPAY_KEY_SECRET || 'mock_secret',
});

export async function POST(request: Request) {
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
            { error: 'Error creating order' },
            { status: 500 }
        );
    }
}
