<template>
    <div>
        <div class="vs">
        <h3>Mysql 连接 测试</h3>
        </div>
        <p v-if="mysqltest.length>0">{{ mysqltest }}</p>
        <el-button @click="mysql_conn">Mysql conn</el-button>
        <pre v-highlight>
            <code class="lang-javascript">
                 //vue
                //mysql连接
                  const mysql=axios.create({
                    baseURL: 'http://localhost:3000',
                    timeout: 1000,
                    proxy: {
                        host: 'http://localhost',
                        port: 3000,
                    }
                })
                //连接方法
                mysql_conn(){
                var that=this;
                mysql.get('/mysqlconn')
                .then(function(res){
                    that.mysqltest_data.push(res.data);
                    console.log(res.data);
                })
            }
            </code>
        </pre>
        <pre v-highlight>
            <code class="lang-javascript">
                //node 服务端
                let mysql=require('mysql')
                const express = require('express')
                const app = express()
                const port=3000


                // 创建一个数据库连接池
                let connection = mysql.createConnection({
                    host:'localhost',
                    user:'root',
                    password:'zw123',
                    database:'db_user'
                });

                app.use(bodyParser.urlencoded({
                    extended:true
                }));

                app.all('*', function(req, res, next) {                       //深刻了解这次错误，以后不会再犯，跨域请求允许
                    res.header("Access-Control-Allow-Origin", "http://localhost:8080");  
                //这里最好不用*通配符，之前就这报错，写上指定域名例如 http://127.0.0.1:8080
                    res.header("Access-Control-Allow-Headers", "content-type");  
                    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
                    res.header("Access-control-Allow-Credentials","true");  
                    next();  
                });

                app.get('/mysqlconn',(req,res)=>{
                // 查询数据
                connection.query('select * from user',function(err,row){
                    if(err){
                        console.log(err)            
                    }
                    console.log(typeof row)
                    let data = JSON.stringify(row)
                    res.send(data);
                })

                app.listen(port,()=> console.log(`Example app listening on port ${port}!`));
            })
            </code>
        </pre>
    </div>
</template>
<script>
import {mysql} from '@/config/httpconfig.js'
export default {
    data(){
        return{
            mysqltest_data:[],
        }
    },
    computed:{
        mysqltest(){
            return this.mysqltest_data;
        }
    },
    methods:{
        mysql_conn(){
            var that=this;
            mysql.get('/mysqlconn')
            .then(function(res){
                that.mysqltest_data.push(res.data);
                console.log(res.data);
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    code{
        text-align: left;
        font-weight: bold;
        font-size: 1.1rem;
    }
</style>