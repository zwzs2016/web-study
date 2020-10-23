<template>
    <div>
        <div class="vs">
        <h3>vue实现跨域请求</h3>
        </div>
        <el-button @click="httpget">点击</el-button>
        <pre v-highlight>
          <code class="lang-javascript">
            //vue 方法
            axios.get('http://localhost:3000/')
            .then(res=>{
              alert(res.data);
            })

            //node
            app.get('/',(req,res)=>res.send('Hello,World！'));
          </code>
        </pre>
        <h3>栅格布局</h3>
        <div class="sge">
          <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>
        <el-row>
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>

        <el-row :gutter="20">
        <!-- <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col> -->
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="10" :sm="6" :md="4" :lg="6" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        </div>
        
    </div>
</template>
<script>
// import http from '@/config/httpconfig.js'
import axios from 'axios'
export default {
    data(){
        return{

        }
    },
    computed:{

    },
    methods:{
        httpget(){
            // http.get('/applicationymlconfig/getymlinfo')
            // .then(function(res){
            //     // JSON.parse(res.data);
            //     console.log(JSON.stringify(res.data));
            //     console.log(res.data);
            //     console.log(res.status);
            //     console.log(res.statusText);
            //     console.log(res.headers);
            //     console.log(res.config);
            // })
            axios.get('http://localhost:3000/')
            .then(res=>{
              alert(res.data);
            })
        }
    },

}
</script>
<style lang="scss" scoped>
code{
		text-align: left;
		font-weight: bold;
		font-size: 1.1rem;
	}

</style>