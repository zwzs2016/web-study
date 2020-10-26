import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        count:1,
        logininfo:false
    },
    mutations:{
        increment(state){
            state.count++
        },
        logininfo(state,val){
            state.logininfo=val
        }
    },
    actions:{
        logininfo(context,val){
            context.commit('logininfo',val)
        }
    },
    getters:{

    },
    modules:{

    }
})
export default store