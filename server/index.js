const express = require('express')

const app = express()
//跨域
app.use(require('cors')())
//使用json
app.use(express.json())
//静态文件托管
app.use('/uploads',express.static(__dirname + '/uploads'))
//数据库链接
require('./plugins/db')(app)
//路由
require('./router/admin')(app)

app.listen(3000,()=>{
    console.log('http://localhost:3000');
})