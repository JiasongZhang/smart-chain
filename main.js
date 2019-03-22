import Vue from 'vue'
import App from './App'

import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.baseurl = 'http://192.168.1.100:8080';  //全局的baseurl
App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
