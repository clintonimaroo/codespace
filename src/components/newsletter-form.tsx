"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function NewsletterForm() {
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
        <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="font-normal">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@gmail.com"
                            required
                            className="w-full p-3 bg-gray-100 outline-none rounded-lg"
                        />
                    </div>
                    <Button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-lg"
                    >
                        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                    </Button>
                </div>

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
            </form>
        </div>
    );
} 