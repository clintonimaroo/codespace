import React from 'react';
import {
    Html,
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Preview,
    Section,
    Text,
    Link,
} from '@react-email/components';

interface ContactEmailProps {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    phoneNumber: string;
    message: string;
}

export const ContactEmail: React.FC<ContactEmailProps> = ({
    firstName,
    lastName,
    email,
    subject,
    phoneNumber,
    message,
}) => (
    <Html>
        <Head />
        <Preview>New Contact Form Submission from {firstName} {lastName}</Preview>
        <Body style={{
            backgroundColor: '#f6f9fc',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            padding: '40px 0'
        }}>
            <Container style={{
                background: '#ffffff',
                borderRadius: '8px',
                padding: '40px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                maxWidth: '600px'
            }}>
                <Section>
                    <Heading style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#1f2937',
                        marginBottom: '24px',
                        textAlign: 'center' as const,
                        lineHeight: '1.3'
                    }}>
                        New Contact Form Submission
                    </Heading>

                    <Section style={{
                        background: '#f8fafc',
                        borderRadius: '6px',
                        padding: '20px',
                        marginBottom: '24px'
                    }}>
                        <Text style={{
                            fontSize: '16px',
                            color: '#374151',
                            margin: '8px 0'
                        }}>
                            <strong style={{ color: '#1f2937' }}>Name:</strong> {firstName} {lastName}
                        </Text>
                        <Text style={{
                            fontSize: '16px',
                            color: '#374151',
                            margin: '8px 0'
                        }}>
                            <strong style={{ color: '#1f2937' }}>Email:</strong>{' '}
                            <Link href={`mailto:${email}`} style={{ color: '#2563eb', textDecoration: 'none' }}>
                                {email}
                            </Link>
                        </Text>
                        <Text style={{
                            fontSize: '16px',
                            color: '#374151',
                            margin: '8px 0'
                        }}>
                            <strong style={{ color: '#1f2937' }}>Phone:</strong> {phoneNumber || 'Not provided'}
                        </Text>
                        <Text style={{
                            fontSize: '16px',
                            color: '#374151',
                            margin: '8px 0'
                        }}>
                            <strong style={{ color: '#1f2937' }}>Subject:</strong> {subject}
                        </Text>
                    </Section>

                    <Hr style={{
                        borderTop: '1px solid #e5e7eb',
                        margin: '24px 0'
                    }} />

                    <Section>
                        <Text style={{
                            fontSize: '16px',
                            color: '#1f2937',
                            fontWeight: '600',
                            marginBottom: '12px'
                        }}>
                            Message:
                        </Text>
                        <Text style={{
                            fontSize: '16px',
                            color: '#374151',
                            lineHeight: '1.6',
                            whiteSpace: 'pre-wrap'
                        }}>
                            {message}
                        </Text>
                    </Section>

                    <Hr style={{
                        borderTop: '1px solid #e5e7eb',
                        margin: '24px 0'
                    }} />

                    <Text style={{
                        fontSize: '14px',
                        color: '#6b7280',
                        textAlign: 'center' as const,
                        marginTop: '24px'
                    }}>
                        This email was sent from the contact form at Code Space Website
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
); 