import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

Vue.use(hljs.vuePlugin);
Vue.use(ElementUI);
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)    
  })
})
// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
