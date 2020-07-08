const express = require('express')
const app = express()
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog',function(err){
    if(err){
        console.log('数据库连接失败');
    } else {
        console.log('数据库连接成功');
    }
})
let cors = require('cors'); 
app.use(cors());
app.use(bodyParser.json())
let user = require('./controller/register')
let article = require('./controller/article')
app.use('/user', user)
app.use('/article', article)
app.listen(8000, ()=>{
    console.log("App started on port 8000");
})