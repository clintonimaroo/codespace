'use client';

import React, { useEffect, useState } from 'react';
import { User } from '../../payload-types';

export const CustomAvatar: React.FC<{ user: User }> = ({ user }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // During server-side rendering or before mounting, return a placeholder
    if (!mounted) {
        return (
            <div className="w-8 h-8 rounded-full bg-gray-200" />
        );
    }

    if (!user?.profilePicture) {
        // Return default avatar if no profile picture
        return (
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                {user?.name?.[0]?.toUpperCase() || 'U'}
            </div>
        );
    }

    return (
        <img
            src={(user.profilePicture as any)?.url}
            alt={`${user.name}'s avatar`}
            className="w-8 h-8 rounded-full object-cover"
        />
    );
};

export default CustomAvatar; 