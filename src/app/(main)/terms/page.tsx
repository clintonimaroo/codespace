import { Logo } from "@/components/brand";
import SpaceBadge from "@/components/space-badge";
import Container from "@/components/container";
import React from "react";

const PrivacyPolicy = () => {
    return (
        <Container>
            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="container gap-5 py-5 md:py-20">
                    <div className="space-y-5 flex-col flex justify-center items-center text-center sm:w-1/2 mx-auto">
                        <Logo className="scale-75" />
                        <SpaceBadge>Legal</SpaceBadge>
                        <h1 className="font-medium text-3xl md:text-5xl leading-snug">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-gray-600">
                            Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
                        </p>
                    </div>
                </section>

                {/* Privacy Policy Content */}
                <section className=" max-w-full  pb-20">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-semibold">
                                Privacy Policy
                            </h2>
                            <p className="text-xl text-gray-600">
                                Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-semibold">Who we are</h2>
                            <p className="text-gray-600">Our website address is https://genxtechies.com.</p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-semibold">Information we collect</h2>
                            <p className="text-gray-600">We may collect personal information that you provide directly to us, such as your name, email address, and other contact information.</p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-semibold">Use of your information</h2>
                            <p className="text-gray-600">We may use the information we collect for various purposes, including:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Providing and improving our services and programs.</li>
                                <li>Communicating with you about community updates, events, and opportunities.</li>
                                <li>Sending newsletters and promotional materials.</li>
                                <li>Responding to your inquiries and requests.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-semibold">Disclosure of your information</h2>
                            <p className="text-gray-600">We do not currently share your information with third parties. We will never sell your personal information to third parties.</p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">Cookies</h2>
                            <div className="space-y-4 text-gray-600">
                                <p>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
                                <p>If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
                                <p>When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select &quot;Remember Me&quot;, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">Contact us</h2>
                            <p className="text-gray-600">If you have any questions or concerns about this Privacy Policy, please contact us at hello@genxtechies.com.</p>
                        </div>

                        <div className="text-sm text-gray-500 pt-8">
                            Last Updated: 23 December 2024
                        </div>
                    </div>
                </section>
            </div>

        </Container>
    );
};

export default PrivacyPolicy;