
const { withContentlayer} = require('next-contentlayer')

const nextconfig = {
  reactStrictMode: true,
  disableImportAliasWarning: true,
}

const ContentSecurityPolicy = `
    default-src 'self' vercel.live giscus.app;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live va.vercel-scripts.com analytics.eu.umami.is www.googletagmanager.com giscus.app;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    frame-src 'self' https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com;
    connect-src *;
    font-src 'self' data:;

module.exports = withContentlayer(nextconfig)
