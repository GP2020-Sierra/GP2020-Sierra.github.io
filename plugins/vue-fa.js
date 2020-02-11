import { fab } from "@fortawesome/free-brands-svg-icons"
import Vue from "vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas, fab)

Vue.component("font-awesome-icon", FontAwesomeIcon)
