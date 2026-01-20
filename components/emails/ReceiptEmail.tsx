import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

interface ReceiptEmailProps {
    customerName: string;
    courseName: string;
    amount: string;
    transactionId: string;
    date: string;
}

export const ReceiptEmail = ({
    customerName,
    courseName,
    amount,
    transactionId,
    date,
}: ReceiptEmailProps) => (
    <Html>
        <Head />
        <Preview>Your receipt for {courseName} - Apni Vidya</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={header}>
                    <Heading style={logo}>Apni Vidya</Heading>
                </Section>
                <Section style={content}>
                    <Heading style={h1}>Payment Successful!</Heading>
                    <Text style={text}>Hi {customerName},</Text>
                    <Text style={text}>
                        Thank you for enrolling in <strong>{courseName}</strong>. Your payment of <strong>{amount}</strong> has been successfully processed.
                    </Text>

                    <Section style={receiptBox}>
                        <Heading as="h2" style={h2}>Transaction Details</Heading>
                        <Text style={receiptRow}>
                            <strong>Order ID:</strong> {transactionId}
                        </Text>
                        <Text style={receiptRow}>
                            <strong>Date:</strong> {date}
                        </Text>
                        <Text style={receiptRow}>
                            <strong>Course:</strong> {courseName}
                        </Text>
                        <Text style={receiptRow}>
                            <strong>Total:</strong> {amount}
                        </Text>
                    </Section>

                    <Section style={buttonContainer}>
                        <Button style={button} href="https://chat.whatsapp.com/Kjd64mv4bJuAY4TrnvaoyI">
                            Join WhatsApp Group
                        </Button>
                    </Section>

                    <Text style={text}>
                        If you have any questions, feel free to reply to this email or contact us via WhatsApp.
                    </Text>

                    <Hr style={hr} />

                    <Text style={footer}>
                        Apni Vidya - Master Skills with IITian Guides<br />
                        © 2026 Apni Vidya. All rights reserved.
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default ReceiptEmail;

const main = {
    backgroundColor: "#f6f9fc",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "40px 0 64px",
    marginBottom: "64px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
};

const header = {
    padding: "0 48px",
    textAlign: "center" as const,
};

const logo = {
    color: "#2b54bc",
    fontSize: "32px",
    fontWeight: "800",
    letterSpacing: "-0.5px",
    margin: "0",
};

const content = {
    padding: "0 48px",
};

const h1 = {
    color: "#1a1a1a",
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "1.3",
    margin: "32px 0 24px",
};

const h2 = {
    color: "#1a1a1a",
    fontSize: "18px",
    fontWeight: "700",
    margin: "0 0 16px",
};

const text = {
    color: "#4a4a4a",
    fontSize: "16px",
    lineHeight: "26px",
    textAlign: "left" as const,
};

const receiptBox = {
    backgroundColor: "#f9fafb",
    padding: "24px",
    borderRadius: "8px",
    margin: "32px 0",
};

const receiptRow = {
    ...text,
    margin: "8px 0",
    fontSize: "14px",
};

const buttonContainer = {
    textAlign: "center" as const,
    margin: "32px 0",
};

const button = {
    backgroundColor: "#2563eb",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    padding: "16px 32px",
};

const hr = {
    borderColor: "#e6ebf1",
    margin: "32px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "16px",
    textAlign: "center" as const,
};
