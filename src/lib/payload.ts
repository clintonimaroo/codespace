import payload from 'payload';

let cached = (global as any).payload;

if (!cached) {
    cached = (global as any).payload = {
        client: null,
        promise: null,
    };
}

export async function getPayload() {
    if (cached.client) {
        return cached.client;
    }

    if (!cached.promise) {
        cached.promise = payload.init({
            secret: process.env.PAYLOAD_SECRET,
            local: true,  // This enables local mode
        });
    }

    try {
        cached.client = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.client;
} 