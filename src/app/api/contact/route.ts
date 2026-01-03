import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const formData = await request.json();

        // 1. Validate Configuration
        // Hardcoded for debugging as requested
        const webhookUrl = "https://primary-production-f991a.up.railway.app/webhook/ed2db0f4-67ca-48af-9ab9-465734b51fbc";

        // const webhookUrl = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK;
        if (!webhookUrl) {
            console.error("Webhook URL not configured");
            return NextResponse.json({ error: "Webhook URL not configured" }, { status: 500 });
        }

        console.log("Forwarding to webhook URL:", webhookUrl);

        // 2. Forward to External Webhook (n8n)
        // Using GET as the webhook is configured for GET requests
        const params = new URLSearchParams();
        Object.entries(formData).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                params.append(key, String(value));
            }
        });

        const response = await fetch(`${webhookUrl}?${params.toString()}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
            }
        });

        // 3. Handle Response
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Webhook failed with status: ${response.status}`, errorText);
            return NextResponse.json({
                error: `Webhook failed: ${response.status} ${response.statusText}`,
                details: errorText
            }, { status: 502 });
        }

        // 4. Return Webhook Response to Client
        const responseData = await response.text();
        try {
            // Try parsing JSON if possible
            return NextResponse.json(JSON.parse(responseData));
        } catch {
            // Fallback to text response
            return new Response(responseData);
        }

    } catch (error) {
        console.error("Internal server error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
