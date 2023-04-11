/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        API_URL: process.env.API_URL
    },
    // basePath: './red',

    // перезапись путей - подмена путей
    async rewrites() {
        return [
            {
                source: '/images/:path*',
                destination: 'http://localhost4200/images/:path*'
            }
        ]
    },
    // переадресуем с одного пользователя на другого
/*    async redirects() {
        return [
            {
                source: '/user/1',
                destination: '/user/2',
                permament: true,
            }
        ]
    },*/
    images: {
        domain: ["localhost", 'static.trairath.co.th']
    }
};

module.exports = nextConfig;

