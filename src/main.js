import Vue from 'vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// require styles
import 'codemirror/lib/codemirror.css'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
