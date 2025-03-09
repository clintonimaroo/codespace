export const metadata = {
    title: 'Upcoming Event | Code Space',
    description: 'View details about this upcoming Code Space event.',
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-transparent">
                <main className="min-h-screen bg-white">
                    {children}
                </main>
            </body>
        </html>
    );
} 