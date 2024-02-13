const { env } = require('process');

const httpsPortValue = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` : '';

const urlsValue = (!httpsPortValue && env.ASPNETCORE_URLS) ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:22695';

const target = httpsPortValue || urlsValue;

const PROXY_CONFIG = [
  {
    context: [
      "/api",
    ],
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  }
]

module.exports = PROXY_CONFIG;
