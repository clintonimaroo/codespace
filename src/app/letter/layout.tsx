import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'a letter to you from clinton',
    description: 'A New Year, A new beginning for everyone. Read Clinton\'s reflections on the incredible journey of Code Space in 2024 and our vision for the future.',
    openGraph: {
        title: 'a letter to you from clinton',
        description: 'A New Year, A new beginning for everyone. Read Clinton\'s reflections on the incredible journey of Code Space in 2024 and our vision for the future.',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'a letter to you from clinton',
        description: 'A New Year, A new beginning for everyone. Read Clinton\'s reflections on the incredible journey of Code Space in 2024 and our vision for the future.',
    },
};

export default function LetterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
} 