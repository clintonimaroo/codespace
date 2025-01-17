import { NextResponse } from 'next/server';

const SENDER_API_URL = 'https://api.sender.net/v2';
const NEWSLETTER_GROUP_ID = 'dw2jKz';

function extractFirstName(email: string): string {
    // Get the part before @ and remove any numbers or special characters
    const namePart = email.split('@')[0];
    // Clean up the name (remove numbers, dots, underscores, etc)
    const cleanName = namePart.replace(/[^a-zA-Z]/g, ' ').trim();
    // Capitalize first letter of each word
    return cleanName.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

async function addSubscriberToSender(email: string) {
    try {
        const firstName = extractFirstName(email);
        
        const response = await fetch(`${SENDER_API_URL}/subscribers`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.SENDER_API_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                firstName,
                groups: [NEWSLETTER_GROUP_ID],
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to subscribe');
        }

        return await response.json();
    } catch (error) {
        console.error('Sender API Error:', error);
        throw error;
    }
}

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        if (!process.env.SENDER_API_TOKEN) {
            console.error('Missing Sender API token');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        await addSubscriberToSender(email);
        return NextResponse.json(
            { 
                message: 'Successfully subscribed to newsletter',
                firstName: extractFirstName(email)
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { error: 'Failed to subscribe to newsletter. Please try again.' },
            { status: 500 }
        );
    }
} 