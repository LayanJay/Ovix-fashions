module.exports = {
    siteUrl: process.env.SITE_URL,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", disallow: "/checkout" },
            { userAgent: "*", disallow: "/bag" },
            { userAgent: "*", disallow: "/404" },
            { userAgent: "*", disallow: "/thank-you" },
            { userAgent: "*", allow: "/" }
        ]
    },
    exclude: ["/checkout", "/bag", "/404", "/thank-you"]
}