import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware handles cache control for various routes
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  // Set cache control headers for different routes
  // Blog API routes - cache for 5 minutes
  if (pathname.startsWith('/api/blog') && !request.method.match(/POST|PUT|DELETE|PATCH/i)) {
    response.headers.set(
      'Cache-Control',
      'public, s-maxage=300, stale-while-revalidate=300'
    );
  }
  
  // Events API - cache for 10 minutes
  if ((pathname.startsWith('/api/upcoming-events') || pathname.startsWith('/api/past-events')) 
      && !request.method.match(/POST|PUT|DELETE|PATCH/i)) {
    response.headers.set(
      'Cache-Control',
      'public, s-maxage=600, stale-while-revalidate=600'
    );
  }
  
  // Gallery API - cache for 1 hour
  if (pathname.startsWith('/api/gallery') && !request.method.match(/POST|PUT|DELETE|PATCH/i)) {
    response.headers.set(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=3600'
    );
  }

  // Media files - cache for 24 hours
  if (pathname.startsWith('/api/media/file') && !request.method.match(/POST|PUT|DELETE|PATCH/i)) {
    response.headers.set(
      'Cache-Control',
      'public, s-maxage=86400, stale-while-revalidate=86400'
    );
  }

  return response;
}

// Configure which paths should be processed by this middleware
export const config = {
  matcher: [
    '/api/blog/:path*',
    '/api/upcoming-events/:path*',
    '/api/past-events/:path*',
    '/api/gallery/:path*',
    '/api/media/file/:path*',
  ],
}; 