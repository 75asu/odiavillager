module.exports = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    images: {
        domains: ['odiavillager.vercel.app'],
        remotePatterns: [
        {
            protocol: 'https',
            hostname: '**',
        },
    ],
    },
}