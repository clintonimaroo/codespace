'use client';

import React from 'react';
import Image from 'next/image';
import './styles.scss';

export default function LetterPage() {
    const audioRef = React.useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [progress, setProgress] = React.useState(0);
    const [currentTime, setCurrentTime] = React.useState('0:00');
    const [duration, setDuration] = React.useState('1:44');

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const current = audioRef.current.currentTime;
            const duration = audioRef.current.duration;
            const progressPercent = (current / duration) * 100;
            setProgress(progressPercent);
            setCurrentTime(formatTime(current));
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(formatTime(audioRef.current.duration));
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (audioRef.current) {
            const progressBar = e.currentTarget;
            const rect = progressBar.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percent = x / rect.width;
            const time = percent * audioRef.current.duration;
            audioRef.current.currentTime = time;
        }
    };

    return (
        <div className="letter-container">
            <div className="content">
                <div className="logo">
                    <Image
                        src="/images/icon-black.png"
                        alt="Logo"
                        width={28}
                        height={28}
                        priority
                    />
                </div>

                <audio
                    ref={audioRef}
                    src="https://framerusercontent.com/assets/s6Kcvm0lGpVdIimLMjrCJjPgd28.mp3"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={() => setIsPlaying(false)}
                    loop
                />
                <div className="audio-player">
                    <div className="audio-controls">
                        <button className="play-button" onClick={togglePlay}>
                            <span>{isPlaying ? '❚❚' : '▶'}</span>
                        </button>
                        <div className="progress-bar" onClick={handleProgressBarClick}>
                            <div className="progress" style={{ width: `${progress}%` }} />
                        </div>
                        <span className="timestamp">{currentTime} / {duration}</span>
                    </div>
                </div>

                <div className="meta-info">
                    <p>[hi play above track as you read this]</p>
                    <p>by: clinton.</p>
                    <p>published: mar 3, 2025.</p>
                </div>

                <div className="text-content">
                    <h2>A New Year, A new beginning for everyone.</h2>

                    <h2>It&apos;s been a very long time since I last wrote to you, and honestly 2024 was one hell of a year!</h2>

                    <h2>The end of 2024 had us reflecting on the year, we recorded a 79% increase in membership, impacted over a thousand Gen Z individuals in tech, and organized our first physical conference with more than 1,000 attendees.</h2>

                    <h2>I remember when we kicked off in 2021 with a single goal at heart: reaching and connecting with more Gen Z in tech. While growing into one of Africa&apos;s fastest-growing communities for Gen Z in tech, we&apos;ve stayed true to our core values as both a community and organization.</h2>

                    <h2>In 2024, We launched our laptop initiatives. We started by giving laptops to few community members in Q1 to boost productivity and support them through. We organized interactive sessions with some of the industry&apos;s brightest minds (including Peace Itimi, Chisom Nwokwu, Emmy Cao, Nyah Macklin) among many others. Organized two major hackathons: Fusion Tech Fest and Wix Studio Hack (in partnership with Wix). We also held our International Women&apos;s Day event, celebrating African Gen Z women breaking bias in tech.</h2>

                    <h2>And guess what? We were also at Moonshot this year with plenty of swag!</h2>

                    <h2>2024 also saw the birth of our annual HackFest, Our second consecutive year and first time hosting it physically in Lagos Nigeria. The event brought together over a thousand Gen Z in tech in person and even more virtually for a day packed with insightful and fun activities, making it&apos;s way to history as one of the largest Gen Z-focused conferences gathering here in Nigeria. Beyond the numbers, Fusion Tech Fest 2024 introduced some of the best and biggest problem solver to handle various tracks we had.</h2>

                    <div className="image-grid">
                        <div className="image-wrapper">
                            <Image
                                src="/images/letter/img-1.jpg"
                                alt="Moonshot swag in nature"
                                width={1000}
                                height={1500}
                                className="main-image"
                                priority
                            />
                        </div>
                        <div className="image-wrapper">
                            <Image
                                src="/images/letter/img-2.jpg"
                                alt="Moonshot podcast recording session"
                                width={1000}
                                height={562}
                                className="secondary-image"
                                priority
                            />
                        </div>
                        <div className="image-wrapper">
                            <Image
                                src="/images/letter/img-3.jpg"
                                alt="Moonshot team with mustaches"
                                width={1000}
                                height={562}
                                className="secondary-image"
                                priority
                            />
                        </div>
                    </div>

                    <h2>Saw teams tackle everything from rural healthcare to financial inclusion. They weren&apos;t just coding side projects - they were solving actual problems Nigeria faces and affect millions of Nigerians daily.</h2>

                    <h2>One key thing about this was the practical focus. These developers weren&apos;t just chasing trendy tech - they were building solutions tailored for Nigerian realities. It was innovation with purpose.</h2>

                    <h2>While all this also count toward our goal for 2025 making it even more bigger, We&apos;re building a community that can make a tangible impact in Nigeria through technology and this is just another step forward!</h2>

                    <h2>Our efforts and results this year have not just helped us realize how far we&apos;ve come, but helped us prove that even with challenges, we cannot be stopped. Code Space is more than just a community, it&apos;s a movement. Looking back, this whole space you see today started as a simple WhatsApp conversation in 2021.</h2>

                    <h2>We had some big moments that defined the year!</h2>

                    <h2>Looking back on the year, I&apos;m incredibly proud of the progress we&apos;ve been able to accomplish as a team. Each passing day, we learn more about our efforts and the incredible partners, sponsors, and individuals who supported and embraced our vision. They continue to support us in empowering thousands of young African tech talents. Thanks to the amazing brands that make our mission even more rewarding!</h2>
                </div>
            </div>
        </div>
    );
} 