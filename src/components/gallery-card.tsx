import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

interface GalleryCardProps {
    title: string;
    image: string;
    href: string;
}

const GalleryCard = ({ title, image, href }: GalleryCardProps) => {
    return (
        <div className="w-full space-y-3">
            {/* Image Container */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Title and Button */}
            <div className="space-y-3">
                <h3 className="text-lg text-primary">{title}</h3>
                <Link href={href}>
                    <Button
                        className="bg-primary hover:bg-primary/90 text-white gap-2"
                        size="sm"
                    >
                        View Album
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default GalleryCard;