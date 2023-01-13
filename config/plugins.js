// path: ./config/plugins.js

module.exports = ({ env }) => ({
  upload: {
    config: {
      providerOptions: {
        sizeLimit: env.int("MAX_FILE_SIZE", 300000),
      },
    },
  },
});