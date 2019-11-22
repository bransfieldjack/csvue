import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import BootstrapVue from 'bootstrap-vue'
import Routes from './routes.js'
import VueApexCharts from 'vue-apexcharts'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VuePapaParse from 'vue-papa-parse'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(BootstrapVue)
Vue.use(VuePapaParse)
Vue.component('apexchart', VueApexCharts)

const router = new VueRouter({
  routes:Routes
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
