const proxy = [
    {
      context: '/api',
      target: 'http://localhost:59730',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;