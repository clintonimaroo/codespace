import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Check if the request is for an embed route
  if (request.nextUrl.pathname.startsWith('/embed')) {
    // Add CORS headers for embed routes
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Cross-Origin-Resource-Policy', 'cross-origin');
    response.headers.set('Cross-Origin-Embedder-Policy', 'credentialless');
  }
  
  return response;
}

// Match all embed routes
export const config = {
  matcher: ['/embed/:path*'],
}; 