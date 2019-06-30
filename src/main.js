import App from './components/LatestMovie'
import Vue from 'vue'
import './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {router} from './router'
import Vuetify  from 'vuetify'
Vue.use(Vuetify)
Vue.use(axios,VueAxios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
