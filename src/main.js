// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuex from 'vuex'
import store from './store'

import './assets/style/global.scss'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes, faArrowUp, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookMessenger,
  faFacebookF,
  faLine,
  faTelegramPlane,
} from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
library.add(faBars, faTimes, faArrowUp, faArrowLeft, faArrowRight, faFacebookMessenger, faFacebookF, faLine, faTelegramPlane)

import VueScrollTo from 'vue-scrollto'



export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  head.htmlAttrs = { lang: 'zh_TW' }

  Vue.component('Layout', DefaultLayout)

  Vue.component('font-awesome', FontAwesomeIcon)

  Vue.use(Vuex)
  Vue.use(VueScrollTo)
  appOptions.store = new Vuex.Store(store)

  // font: Open Sans, Roboto
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap'
  })
}