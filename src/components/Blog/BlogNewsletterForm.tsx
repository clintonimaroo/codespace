"use client";

import { useState } from "react";

export default function BlogNewsletterForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState("");
    const [firstName, setFirstName] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage("");

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to subscribe');
            }

            setFirstName(data.firstName);
            setStatus('success');
            setEmail("");
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
        }
    };

    return (
        <div className="space-y-2">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 max-w-xl">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    required
                    className="flex-1 px-4 py-2.5 text-base border border-[#E5E9F2] rounded-lg focus:outline-none focus:border-primary"
                />
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-70"
                >
                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
            </form>
            {status === 'success' && (
                <p className="text-sm text-green-600">
                    {firstName ? `Thank you ${firstName}! ` : 'Thank you! '}
                    You&apos;ll receive our updates soon.
                </p>
            )}
            {status === 'error' && (
                <p className="text-sm text-red-600">
                    {errorMessage}
                </p>
            )}
        </div>
    );
} 