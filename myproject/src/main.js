import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
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
Vue.config.productionTip = false
router.beforeEach((to,from,next)=>{
  // if(to.meta.requireAuth){
  //   console.log("登录后"+store.state.logininfo)
  //   if(store.state.logininfo===true){
  //     next()
  //   }else{
  //     next({ name: 'login' })
  //   } 
  // }else 
  if(to.name!=='login'){
    if(localStorage.getItem('login')){
      console.log(localStorage.getItem('login'))
      next()
    }else{
      next({name: 'login'})
    }
  }
  else{
    next()
  } 
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
