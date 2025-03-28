"use client";

import React from 'react';

type YouTubeEmbedProps = {
    url: string;
};

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ url }) => {
    // Extract video ID from YouTube URL
    const getYouTubeVideoId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };

    const videoId = getYouTubeVideoId(url);
    if (!videoId) return null;

    return (
        <div className="relative w-full aspect-video my-8">
            <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

export default YouTubeEmbed; 