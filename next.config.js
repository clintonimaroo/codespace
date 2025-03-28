import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pbs.twimg.com",
            },
            {
                protocol: "https",
                hostname: "i.postimg.cc",
            },
            {
                protocol: "https",
                hostname: "i.ibb.co",
            },
        ],
    },
    experimental: {
        reactCompiler: false,
    },
    compress: true,
    staticPageGenerationTimeout: 180,
    poweredByHeader: false,
};

export default withPayload(nextConfig);

