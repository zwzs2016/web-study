let http=require('http')
let mysql=require('mysql')
let redis=require('redis')
let urls=require('url')
let jwt=require('jsonwebtoken')

const express = require('express')
const session=require('express-session')
const app = express()
const client=redis.createClient(6379,'127.0.0.1')
const port=3000

var bodyParser = require('body-parser');

//配置中间件
app.use(session({
    secret: "keyboard cat",
     resave: false,
     saveUninitialized: true,
     cookie: ('name', 'value',{maxAge:  5*60*1000,secure: false})
}));

client.on("ready",function(err){
    if(err){
        console.log(err);
    }else{
        console.log("redis ready");
    }
})

client.on("connect", function(err){
    if(err){
        console.log("Error " + error);
    }else{
        console.log("redis connect");
    }
})
client.on("reconnecting", function(err){
    if(err){
        console.log("Error " + error);
    }else{
        console.log("redis reconnecting");
    }
})

client.on("end", function(err){
    if(err){
        console.log("Error " + error);
    }else{
        console.log("redis end");
    }
})

client.on("warning", function(err){
    if(err){
        console.log("Error " + error);
    }else{
        console.log("redis warning");
    }
})

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
//这个地方是最坑了，百度查了好多大佬给的方案都没加这条，报错一直报这个，加上就ok
    next();  
});

app.post('/loginin',(req,res)=>{
    console.log("login")
    req.session.logininfo=true
    res.send(req.session.logininfo)
})

app.post('/loginout',(req,res)=>{
    console.log("loginout")
    req.session.logininfo=false
    res.send(req.session.logininfo)
})

app.post('/url',function(req, res){
    console.log(req.body);
    res.send(" post successfully!");
    // res.send(req.body);
});
app.post('/user/login',(req,res)=>{
    // token验证
    const username = "admin"
    //token私钥
    const PRIVATE_KEY = 'tokenKey'
    //token时效
    const JWT_EXPIRED = 60 * 60
    const token = jwt.sign({ username },PRIVATE_KEY,{expiresIn:JWT_EXPIRED})
    res.json({
        token
    })
})

app.get('/',(req,res)=>res.send('Hello,World！'))

app.get('/logininfo',(req,res)=>{
    res.send(session.logininfo)
})

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
})

app.get('/islogin',(req,res)=>{
    // 查询是否登录
})


app.listen(port,()=> console.log(`Example app listening on port ${port}!`));


const server=http.createServer(function(req,res){
    res.statusCode=200;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');  
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");  
    res.setHeader("X-Powered-By", ' 3.2.1')  
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    var params = urls.parse(req.url, true).query;
})

server.on('request',function(request,response){
    let url=request.url;
    if(url==='/'){
        // 查询数据
        connection.query('select * from user',function(err,row){
            if(err){
                 console.log(err)            
            }
            console.log(typeof row)
            let data = JSON.stringify(row)
            response.end(data)
        })
    }
    if(url==='/redistest'){
        // redis 连接测试
        // 使用set进行string类型数据的设置
        client.set("color", "red", redis.print);
        // 使用get进行string类型数据的读取
        client.get("color", function(err, value){
            if(err) throw err;
            console.log("Got: " + value); 
            var redisdata=value;
            response.end(redisdata);
        })
    }
    if(url==='/select'){
        let name=params.name;
        console.log("select");
        console.log("name"+name);
    }
})
// server.listen(3000,()=>{
//     console.log('服务器开启成功！')
// })