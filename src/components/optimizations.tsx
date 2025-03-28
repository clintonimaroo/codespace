import React, { Suspense } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Optimized image component with performance best practices
export const OptimizedImage = ({
  src,
  alt,
  width = 800,
  height = 450,
  className = '',
  priority = false,
  ...props
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  [key: string]: any;
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      {...props}
    />
  );
};

// Simple loading fallback
export const LoadingSkeleton = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-200 h-48 rounded-lg w-full ${className}`}></div>
);

// Generic lazy loaded component
export function LazyLoad<T extends object>(
  Component: React.ComponentType<T>,
  fallback?: React.ReactNode
) {
  return function LazyComponent(props: T) {
    return (
      <Suspense fallback={fallback || <LoadingSkeleton />}>
        <Component {...props} />
      </Suspense>
    );
  };
}

// Lazy loaded YouTube embed for blog posts
export const LazyYouTubeEmbed = ({
  videoId,
  title = 'YouTube video player',
}: {
  videoId: string;
  title?: string;
}) => {
  return (
    <div className="relative w-full aspect-video my-8">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
};

// Lazy loaded rich text editor
export const LazyLexicalRenderer = dynamic(
  () => import('./lexical-renderer').then((mod) => mod.LexicalRenderer),
  {
    loading: () => <LoadingSkeleton className="h-96" />,
    ssr: false,
  }
); 