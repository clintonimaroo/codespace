"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "How can I join the Code Space community?",
        answer: "You must fill out the Code Space Membership form. Your application will be reviewed between one to two weeks. After we confirm that your goals and ours align, you will receive an invite to join our community channels.",
    },
    {
        question: "How can I volunteer at Code Space?",
        answer: "We’d love to have you on board! To learn more about volunteering opportunities at Code Space, please fill out our volunteer application form or contact us at hello@codespaces.org.",
    },
    {
        question: "How can I become a Code Space Ambassador?",
        answer: "Do you want to be a part of our mission? Fill out the Code Space Ambassador form, and tell us why you’d love to take this role. We can’t wait to hear from you!",
    },
    {
        question: "How do I submit a press inquiry or request for an interview?",
        answer: "If you have a press inquiry or would like to request an interview, please email us at hello@codespaces.org. We look forward to hearing from you!",
    },
    {
        question: "How can I donate to support Code Space's mission?",
        answer: "We are on a mission where we need both cash and kind donations. We appreciate whatever you wish to donate, and you can email us via hello@codespaces.org",
    },
    {
        question: "Where can I find more information about Code Space's brand and media assets?",
        answer: "For more information about Code Space’s brand and media assets, please visit our Brand Guidelines.",
    },
];

const FAQItem = ({ question, answer }: FAQItem) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-[#EAECF0]">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left"
            >
                <span className="text-[#101828] text-lg font-medium">{question}</span>
                <ChevronDown
                    className={`w-5 h-5 text-[#98A2B3] transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            {isOpen && (
                <div className="pb-6">
                    <p className="text-[#6B7280] text-base/relaxed">{answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQSection = () => {
    return (
        <div className="py-24 bg-white">
            <div className="container max-w-3xl mx-auto px-4">
                <h2 className="text-[#101828] text-3xl font-semibold text-center mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-0">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection; 