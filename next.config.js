const withTM = require('next-transpile-modules')(['openai']);

module.exports = withTM({
  //...other configs
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
  },
  //..other configs
});
