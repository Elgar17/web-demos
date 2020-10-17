var express = require('express')
var path = require('path')
var router = require('./router.js')
var bodyParser = require('body-parser')
var session = require('express-session')

var app = express()

app.use('/public/',express.static(path.join(__dirname,'./public/')))
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')))

//渲染模板引擎
app.engine('html',require('express-art-template'))
app.set('views',path.join(__dirname,'./views/'))

//处理post 在路由之前
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())

//express不支持Cookie和Session
//用express-session插件来解决
app.use(session({
    //配置加密字符串
    secret: 'keyboard cat', 
    resave: false,
    saveUninitialized: true
}))


//路由挂载到app中
app.use(router)


app.listen(3000,function(){
    console.log('server is running at por 3000...')
})