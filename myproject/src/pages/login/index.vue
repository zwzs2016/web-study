<template>
  <div class="login" :style="note">
      <h1>登录</h1>
      <el-input v-model="inputadmin" placeholder="用户名" prefix-icon="el-icon-user">
      </el-input>
      <el-input v-model="inputpwd" placeholder="密码" prefix-icon="el-icon-key" show-password></el-input>
      <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>

<script>
import {mysql} from '@/config/httpconfig.js'
export default {
  data () {
    return {
        note: {
            backgroundImage: "url(" + require("@/assets/img/bg.jpeg") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
            
        },
        inputadmin:"",
        inputpwd:""
    }
  },
  methods:{
      login(){
          if(this.inputadmin==="admin" && this.inputpwd==="123456"){
              mysql.post('/loginin')
              .then(res=>{
                  console.log(res.data)
                  if(res.data==true){
                      this.$store.dispatch('logininfo',true)
                      console.log(this.$store.state.logininfo)
                      localStorage.setItem('login',true)
                    //   location.href="/"
                    this.$router.push('/')
                  }
              })
          }
      }
  },

}
</script>

<style lang='scss'>
.login{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .el-input{
    width: 22rem;
    margin: 1rem 0;
    }
    button{
        width: 22rem;
    }
    img{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;   
        background-size: 100% 100%; 
    }
    
}

</style>
