import Container from "@/components/container";
import React from "react";

const PrivacyPolicy = () => {
    const tableOfContents = [
        { id: 'about', text: 'About this policy' },
        { id: 'basics', text: '1. The Basics' },
        { id: 'information', text: '2. Information we collect' },
        { id: 'protection', text: '3. How we protect your data' },
        { id: 'contact', text: '4. Contact us' }
    ];

    return (
        <Container>
            <div className="min-h-screen bg-white">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Side Navigation - Fixed */}
                    <aside className="hidden lg:block w-64 shrink-0">
                        <div className="sticky top-8 px-6 md:px-8 lg:px-12">
                            <h2 className="text-sm font-medium text-gray-900 mb-4">On this page</h2>
                            <nav className="flex flex-col space-y-3">
                                {tableOfContents.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                                    >
                                        {item.text}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content - Scrollable */}
                    <main className="flex-1 max-w-3xl px-6 md:px-8 lg:px-12 py-10">
                        <h1 className="font-graphik text-[51px] font-bold tracking-tight mb-8">Privacy Policy</h1>

                        <div className="space-y-12">
                            {/* About Section */}
                            <section id="about">
                                <h2 className="text-xl font-semibold mb-4">About this policy</h2>
                                <p className="font-graphik text-[17px] text-gray-600 leading-relaxed">
                                    Our goal with this Policy is to provide a simple and straightforward explanation of what information CodeSpace collects from and about users, and how we use and protect that information. While we rely upon our users to build and share code, we also aim to provide notice and obtain necessary consent for processing your information. We value transparency and want to provide you with a clear description of how we treat your information.
                                </p>
                            </section>

                            {/* The Basics */}
                            <section id="basics">
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
                            <section id="information">
                                <h2 className="text-xl font-semibold mb-4">2. Information we collect</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-graphik text-[17px] font-medium mb-2">Information you provide</h3>
                                        <p className="font-graphik text-[17px] text-gray-600 leading-relaxed">
                                            When you create an account or use our services, we collect:
                                        </p>
                                        <ul className="list-disc pl-6 mt-2 space-y-2 font-graphik text-[17px] text-gray-600">
                                            <li>Basic profile information (name, email, profile picture)</li>
                                            <li>Authentication credentials (securely stored)</li>
                                            <li>Project and repository data</li>
                                            <li>Code and collaboration content</li>
                                            <li>Communication preferences</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-graphik text-[17px] font-medium mb-2">Information we automatically collect</h3>
                                        <p className="font-graphik text-[17px] text-gray-600 leading-relaxed">
                                            When you use our platform, we automatically collect:
                                        </p>
                                        <ul className="list-disc pl-6 mt-2 space-y-2 font-graphik text-[17px] text-gray-600">
                                            <li>Usage statistics and interactions</li>
                                            <li>Device and browser information</li>
                                            <li>IP address and location data</li>
                                            <li>Performance and error data</li>
                                            <li>Cookies and similar tracking technologies</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Usage and Protection */}
                            <section id="protection">
                                <h2 className="text-xl font-semibold mb-4">3. How we protect your data</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-graphik text-[17px] font-medium mb-2">Security measures</h3>
                                        <p className="font-graphik text-[17px] text-gray-600 leading-relaxed">
                                            We implement industry-standard security measures:
                                        </p>
                                        <ul className="list-disc pl-6 mt-2 space-y-2 font-graphik text-[17px] text-gray-600">
                                            <li>End-to-end encryption for code and data</li>
                                            <li>Secure, isolated development environments</li>
                                            <li>Regular security audits and testing</li>
                                            <li>Access controls and authentication</li>
                                            <li>24/7 monitoring and threat detection</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Contact Information */}
                            <section id="contact">
                                <h2 className="text-xl font-semibold mb-4">4. Contact us</h2>
                                <p className="font-graphik text-[17px] text-gray-600 leading-relaxed">
                                    If you have any questions about this Privacy Policy or our practices:
                                </p>
                                <ul className="mt-4 space-y-2 font-graphik text-[17px] text-gray-600">
                                    <li>Email: privacy@codespace.com</li>
                                    <li>Support: help.codespace.com</li>
                                    <li>Security: security@codespace.com</li>
                                </ul>
                            </section>

                            <div className="text-sm text-gray-500 pt-8 border-t">
                                Last Updated: March 15, 2024
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </Container>
    );
};

export default PrivacyPolicy;