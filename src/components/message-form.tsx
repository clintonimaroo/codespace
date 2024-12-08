import { Button } from "@/components/ui/button";

const MessageForm = () => {
    return (
        <div className="w-full max-w-[640px] mx-auto px-6 md:px-0 space-y-8">
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-normal">Message us</h2>
                <p className="text-[#6B7280]">We&apos;ll get back to you within 24 hours</p>
            </div>

            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-sm">First Name</label>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full px-4 py-3 rounded-lg bg-[#F9FAFB] border-0"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm">Last Name</label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full px-4 py-3 rounded-lg bg-[#F9FAFB] border-0"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-sm">Email Address</label>
                    <input
                        type="email"
                        placeholder="you@gmail.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#F9FAFB] border-0"
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-sm">Message</label>
                    <textarea
                        placeholder="Leave us a message"
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg bg-[#F9FAFB] border-0 resize-none"
                    />
                </div>

                <Button className="w-full py-6 rounded-lg text-base">
                    Send Message
                </Button>
            </form>
        </div>
    );
};

export default MessageForm;