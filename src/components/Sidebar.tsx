'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    Home01Icon,
    News01Icon,
    Image01Icon,
    Calendar01Icon,
    UserGroupIcon,
    Settings01Icon,
    Logout01Icon
} from 'hugeicons-react'
import { cn } from '@/lib/utils'

const AdminSidebar = (props: any) => {
    const pathname = usePathname()

    const navItems = [
        {
            label: 'Back to Website',
            href: '/',
            icon: Home01Icon,
        },
        {
            label: 'Dashboard',
            href: '/admin',
            icon: Home01Icon,
        },
        {
            label: 'Blog',
            href: '/admin/collections/blog',
            icon: News01Icon,
        },
        {
            label: 'Gallery',
            href: '/admin/collections/gallery',
            icon: Image01Icon,
        },
        {
            label: 'Upcoming Events',
            href: '/admin/collections/upcoming-events',
            icon: Calendar01Icon,
        },
        {
            label: 'Past Events',
            href: '/admin/collections/past-events',
            icon: Calendar01Icon,
        },
        {
            label: 'Users',
            href: '/admin/collections/users',
            icon: UserGroupIcon,
        },
        {
            label: 'Media',
            href: '/admin/collections/media',
            icon: Image01Icon,
        },
    ]

    return (
        <aside className="fixed left-0 top-0 z-50 h-screen w-[260px] bg-[#171717] text-[#ECECEC] flex flex-col font-sans">
            <div className="flex h-[60px] items-center px-4">
                <div className="flex items-center gap-2 px-2 py-2 hover:bg-[#212121] rounded-lg cursor-pointer transition-colors w-full">
                    <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                        <div className="h-5 w-5 bg-white rounded-full" />
                    </div>
                    <span className="font-medium text-sm">Fathom</span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto py-2 px-3 space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-colors group",
                                isActive
                                    ? "bg-[#212121] text-white"
                                    : "text-[#B4B4B4] hover:bg-[#212121] hover:text-white"
                            )}
                        >
                            <item.icon
                                size={20}
                                className={cn(
                                    "stroke-[1.5]",
                                    isActive ? "text-white" : "text-[#B4B4B4] group-hover:text-white"
                                )}
                            />
                            <span>{item.label}</span>
                        </Link>
                    )
                })}
            </div>

            <div className="p-3 mt-auto">
                <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#212121] cursor-pointer text-[#B4B4B4] hover:text-white transition-colors">
                    <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
                        <img src="https://cdn.auth0.com/avatars/ci.png" alt="Profile" className="h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-white">Clinton Imaro</span>
                        <span className="text-xs">Plus</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default AdminSidebar
