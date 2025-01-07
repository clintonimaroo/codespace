import { NextResponse } from 'next/server';
import payload from 'payload';
import { getPayload } from '@/lib/payload';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const payloadClient = await getPayload();
        
        console.log('Fetching blog with ID:', params.id);
        
        const blog = await payloadClient.findByID({
            collection: 'blogs',
            id: params.id,
        });

        if (!blog) {
            console.log('Blog not found for ID:', params.id);
            return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
        }

        console.log('Successfully found blog:', blog.id);
        return NextResponse.json(blog);
    } catch (error) {
        console.error('Detailed error fetching blog:', {
            error,
            message: error.message,
            stack: error.stack,
        });
        
        return NextResponse.json(
            { 
                message: 'Internal server error', 
                details: error.message 
            }, 
            { status: 500 }
        );
    }
} 