/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    async redirects() {
        return [
            {
                source: '/blahaj',
                destination: 'https://discord.gg/763bUceUHb',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
