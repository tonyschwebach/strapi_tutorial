module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  dirs: {
    public: env("MEDIA_DIR", "./public"),
  },
  url: env("PUBLIC_URL", ""),
  proxy: env.bool("IS_PROXIED", false),
});
