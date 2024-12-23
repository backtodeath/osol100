function setupProxy({ tls }) {
  const serverResources = ['/api', '/services', '/management', '/v3/api-docs', '/h2-console', '/health'];
  return [
    {
      context: serverResources,
      target: `http${tls ? 's' : ''}://localhost:8080`,
      secure: false,
      changeOrigin: tls,
    },
    {
      context: ['/coingecko'], // Route all requests starting with /coingecko to the CoinGecko API
      target: 'https://api.coingecko.com',
      secure: true,
      changeOrigin: true,
      pathRewrite: { '^/coingecko': '' }, // Remove /coingecko prefix before forwarding to the API
    },
  ];
}

module.exports = setupProxy;
