import { NextResponse } from "next/server";
import crypto from "crypto";
import { Resend } from "resend";
import ReceiptEmail from "@/components/emails/ReceiptEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.text();
        const signature = req.headers.get("x-razorpay-signature");

        if (!signature) {
            return NextResponse.json({ error: "No signature provided" }, { status: 400 });
        }

        const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
        if (!secret) {
            console.error("RAZORPAY_WEBHOOK_SECRET is not set");
            return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
        }

        const expectedSignature = crypto
            .createHmac("sha256", secret)
            .update(body)
            .digest("hex");

        if (signature !== expectedSignature) {
            console.error("Invalid signature");
            return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
        }

        const payload = JSON.parse(body);
        const event = payload.event;

        if (event === "payment.captured") {
            const payment = payload.payload.payment.entity;
            const order_id = payment.order_id;
            const amount = payment.amount / 100; // in dollars
            const email = payment.email;
            const notes = payment.notes || {};
            const courseName = notes.courseName || "all-in-one mastery course";
            const customerName = notes.customerName || "Student";

            // 1. Send Receipt to Buyer
            try {
                await resend.emails.send({
                    from: "Apni Vidya <onboarding@resend.dev>",
                    to: email,
                    subject: `Receipt for ${courseName} - Apni Vidya`,
                    react: ReceiptEmail({
                        customerName,
                        courseName,
                        amount: `$${amount}`,
                        transactionId: payment.id,
                        date: new Date().toLocaleDateString(),
                    }),
                });
            } catch (error) {
                console.error("Error sending receipt email:", error);
            }

            // 2. Send Notification to Admin
            const adminEmail = process.env.ADMIN_EMAIL;
            if (adminEmail) {
                try {
                    await resend.emails.send({
                        from: "System <onboarding@resend.dev>",
                        to: adminEmail,
                        subject: `New Payment Received: $${amount}`,
                        html: `
                            <h2>New Course Enrollment!</h2>
                            <p><strong>Course:</strong> ${courseName}</p>
                            <p><strong>Amount:</strong> $${amount}</p>
                            <p><strong>Student:</strong> ${customerName} (${email})</p>
                            <p><strong>Payment ID:</strong> ${payment.id}</p>
                        `,
                    });
                } catch (error) {
                    console.error("Error sending admin notification:", error);
                }
            }
        }

        return NextResponse.json({ status: "ok" });
    } catch (error) {
        console.error("Webhook error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
