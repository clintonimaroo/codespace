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
    Button,
} from '@react-email/components';

interface BlogNotificationEmailProps {
    title: string;
    excerpt: string;
    authorName: string;
    blogUrl: string;
}

export const BlogNotificationEmail: React.FC<BlogNotificationEmailProps> = ({
    title,
    excerpt,
    authorName,
    blogUrl,
}) => (
    <Html>
        <Head />
        <Preview>New Blog Post: {title}</Preview>
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
                        New Blog Post Published!
                    </Heading>

                    <Section style={{
                        background: '#f8fafc',
                        borderRadius: '6px',
                        padding: '20px',
                        marginBottom: '24px'
                    }}>
                        <Text style={{
                            fontSize: '20px',
                            color: '#1f2937',
                            fontWeight: '600',
                            margin: '0 0 12px'
                        }}>
                            {title}
                        </Text>
                        <Text style={{
                            fontSize: '16px',
                            color: '#374151',
                            margin: '0 0 16px',
                            lineHeight: '1.5'
                        }}>
                            {excerpt}
                        </Text>
                        <Text style={{
                            fontSize: '14px',
                            color: '#6b7280',
                            margin: '0'
                        }}>
                            By {authorName}
                        </Text>
                    </Section>

                    <Section style={{ textAlign: 'center' as const }}>
                        <Button
                            href={blogUrl}
                            style={{
                                backgroundColor: '#000',
                                borderRadius: '24px',
                                color: '#fff',
                                fontSize: '16px',
                                textDecoration: 'none',
                                textAlign: 'center' as const,
                                display: 'inline-block',
                                padding: '12px 24px',
                                marginTop: '16px'
                            }}
                        >
                            Read the Full Post
                        </Button>
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
                        You received this email because you&apos;re subscribed to Code Space blog updates.
                        <br />
                        <Link
                            href="#"
                            style={{
                                color: '#2563eb',
                                textDecoration: 'underline',
                                marginTop: '8px',
                                display: 'inline-block'
                            }}
                        >
                            Unsubscribe
                        </Link>
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
); 