module.exports = {
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    ["bootstrap-vue/nuxt", { css: false }],
    // 'vue-youtube-embed'
    "@nuxtjs/toast",
    [
      "nuxt-sass-resources-loader",
      [
        "~/assets/scss/_bootstrap-variables.scss",
        "~/assets/scss/_custom-variables.scss",
        "bootstrap/scss/_functions.scss",
        "bootstrap/scss/_variables.scss",
        "bootstrap/scss/_mixins.scss",
        "~/assets/scss/base/_mixins.scss"
      ]
    ]
  ],
  axios: {
    debug: process.env.APP_ENV !== "production"
  },
  auth: {
    cookie: {
      prefix: "auth.",
      options: {
        path: "/",
        secure: true
      }
    },
    strategies: {
      drupal: {
        _scheme: "~/plugins/drupal-auth.js"
      }
    }
  },
  router: {
    middleware: ["post-data"]
  },
  toast: {
    position: "top-left",
    className: "toast-success",
    theme: "bubble"
  },
  plugins: [
    "~/plugins/axios",
    "~/plugins/vue2-filters",
    "~/plugins/asyncComputed",
    "~/plugins/apiv2"
    "~/plugins/globalComponents",
    "~/plugins/poets-api"
  ],
  css: ["~assets/scss/app.scss"],
  /*
  ** Headers of the page
  */
  head: {
    title: "Poets.org",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt front end for Poets"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico?v2" }]
  },
  router: {
    middleware: ["menu", "redirects"]
  },
  /*
   * Customize the progress bar color
   */
  loading: { color: "#F53F5B", height: "5px" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      const svgRule = config.module.rules.find(rule => rule.test.test(".svg"));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        loader: "vue-svg-loader",
        options: {
          svgo: {
            plugins: [{ prefixIds: true }, { removeViewBox: false }]
          }
        }
      });
      config.node = { fs: "empty" };
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  env: {
    baseURL: process.env.API_URL || "https://poets.org",
    CONSUMER_ID: process.env.CONSUMER_ID,
    CONSUMER_SECRET: process.env.CONSUMER_SECRET,
    ONEALL_SUBDOMAIN: process.env.ONEALL_SUBDOMAIN,
    ONEALL_PRIVATE_KEY: process.env.ONEALL_PRIVATE_KEY,
    ONEALL_PUBLIC_KEY: process.env.ONEALL_PUBLIC_KEY,
    TWIT_CONSUMER_KEY: process.env.TWIT_CONSUMER_KEY,
    TWIT_CONSUMER_SECRET: process.env.TWIT_CONSUMER_SECRET,
    TWIT_ACCESS_TOKEN: process.env.TWIT_ACCESS_TOKEN,
    TWIT_TOKEN_SECRET: process.env.TWIT_TOKEN_SECRET
  }
};
