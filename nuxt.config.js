import Locations from "./src/locations.js"

export default {
  mode: "spa",
  /*
  ** Headers of the page
  */
  head: {
    title: "Sierra",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: process.env.npm_package_description || "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fff" },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/jquery.client",
    { src: "~/plugins/VueApexCharts.js", ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    // https://axios.nuxtjs.org/
    "@nuxtjs/axios"
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt"
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */

    vendor: ["vue-apexchart"],
    extend (config, ctx) {
    }
  },
  generate: {
    fallback: "404.html",
    async routes () {
      const locations = await Locations.getLocations()
      return Object.values(locations).map(x => "/location/" + x.id)
    }
  }
}
