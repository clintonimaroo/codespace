import Container from "@/components/container";
import React from "react";

const PrivacyPolicy = () => {

    return (
        <Container>
            <div className="min-h-screen bg-white">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content - Scrollable */}
                    <main className="flex-1 max-w-3xl py-10 md:py-20">
                        <h1 className="font-graphik text-[32px] md:text-[51px] font-bold tracking-tight mb-8 animate-fade-in">Privacy Policy</h1>

                        <div className="space-y-12">
                            {/* About Section */}
                            <section id="about" className="animate-slide-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                                <h2 className="text-xl font-semibold mb-4">About this policy</h2>
                                <p className="font-graphik text-[17px] text-gray-600 leading-relaxed">
                                    Our goal with this Policy is to provide a simple and straightforward explanation of what information CodeSpace collects from and about users, and how we use and protect that information. While we rely upon our users to build and share code, we also aim to provide notice and obtain necessary consent for processing your information. We value transparency and want to provide you with a clear description of how we treat your information.
                                </p>
                            </section>

                            {/* The Basics */}
                            <section id="basics" className="animate-slide-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
                                <h2 className="text-xl font-semibold mb-4">1. The Basics</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-graphik text-[17px] font-medium mb-2">Why is this important?</h3>
                                        <p className="font-graphik text-[17px] text-gray-600 leading-relaxed">
                                            Privacy and security are very important to us at CodeSpace. This document helps you understand how we collect, use, and protect user information to operate, improve, develop, and protect our services. Please take time to read this carefully.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-graphik text-[17px] font-medium mb-2">Some background</h3>
                                        <p className="font-graphik text-[17px] text-gray-600 leading-relaxed">
                                            Our mission at CodeSpace is to empower the next generation of developers with powerful collaboration tools and secure coding environments. Our platform provides an easy way for you to write, share, and collaborate on code while maintaining the highest standards of security and privacy. We enable developers to focus on building great software by handling the complexity of secure collaboration and version control.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Information Collection */}
                            <section id="information" className="animate-slide-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                                <h2 className="text-xl font-semibold mb-4">2. Information we collect</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-graphik text-[17px] font-medium mb-2">Information you provide</h3>
                                        <p className="font-graphik text-[17px] text-gray-600 leading-relaxed">
                                            When you create an account or use our services, we collect:
                                        </p>
                                        <ul className="list-disc pl-6 mt-2 space-y-2 font-graphik text-[17px] text-gray-600">
                                            <li className="hover:translate-x-1 transition-transform duration-200">Basic profile information (name, email, profile picture)</li>
                                            <li className="hover:translate-x-1 transition-transform duration-200">Authentication credentials (securely stored)</li>
                                            <li className="hover:translate-x-1 transition-transform duration-200">Project and repository data</li>
                                            <li className="hover:translate-x-1 transition-transform duration-200">Code and collaboration content</li>
                                            <li className="hover:translate-x-1 transition-transform duration-200">Communication preferences</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-graphik text-[17px] font-medium mb-2">Information we automatically collect</h3>
                                        <p className="font-graphik text-[17px] text-gray-600 leading-relaxed">
                                            When you use our platform, we automatically collect:
                                        </p>
                                        <ul className="list-disc pl-6 mt-2 space-y-2 font-graphik text-[17px] text-gray-600">
                                            <li className="hover:translate-x-1 transition-transform duration-200">Usage statistics and interactions</li>
                                            <li className="hover:translate-x-1 transition-transform duration-200">Device and browser information</li>
                                            <li className="hover:translate-x-1 transition-transform duration-200">IP address and location data</li>
                                            <li className="hover:translate-x-1 transition-transform duration-200">Performance and error data</li>
                                            <li className="hover:translate-x-1 transition-transform duration-200">Cookies and similar tracking technologies</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Usage and Protection */}
                            <section id="protection" className="animate-slide-up opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
                                <h2 className="text-xl font-semibold mb-4">3. How we protect your data</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-graphik text-[17px] font-medium mb-2">Security measures</h3>
                                        <p className="font-graphik text-[17px] text-gray-600 leading-relaxed">
                                            We implement industry-standard security measures:
                                        </p>
                                        <ul className="list-disc pl-6 mt-2 space-y-2 font-graphik text-[17px] text-gray-600">
                                            <li className="hover:translate-x-1 transition-transform duration-200">End-to-end encryption for code and data</li>
                                            <li className="hover:translate-x-1 transition-transform duration-200">Secure, isolated development environments</li>
                                            <li className="hover:translate-x-1 transition-transform duration-200">Regular security audits and testing</li>
                                            <li className="hover:translate-x-1 transition-transform duration-200">Access controls and authentication</li>
                                            <li className="hover:translate-x-1 transition-transform duration-200">24/7 monitoring and threat detection</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Contact Information */}
                            <section id="contact" className="animate-slide-up opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
                                <h2 className="text-xl font-semibold mb-4">4. Contact us</h2>
                                <p className="font-graphik text-[17px] text-gray-600 leading-relaxed">
                                    If you have any questions about this Privacy Policy or our practices:
                                </p>
                                <ul className="mt-4 space-y-2 font-graphik text-[17px] text-gray-600">
                                    <li className="hover:translate-x-1 transition-transform duration-200">Email: privacy@codespace.com</li>
                                    <li className="hover:translate-x-1 transition-transform duration-200">Support: help.codespace.com</li>
                                    <li className="hover:translate-x-1 transition-transform duration-200">Security: security@codespace.com</li>
                                </ul>
                            </section>

                            <div className="text-sm text-gray-500 pt-8 border-t animate-fade-in [animation-delay:1200ms]">
                                Last Updated: December 15, 2024
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </Container>
    );
};

export default PrivacyPolicy;