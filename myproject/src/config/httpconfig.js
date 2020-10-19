import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const http = axios.create({
    baseURL: 'http://127.0.0.1:8090',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'},
    proxy: {
        host: 'http://127.0.0.1',
        port: 8090,
        // auth: {
        //   username: 'mikeymike',
        //   password: 'rapunz3l'
        // }
      },

  });

  const mysql=axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    proxy: {
        host: 'http://localhost',
        port: 3000,
      }
  })

  export { http , mysql}
