const express = require('express')
let router = express.Router()
// 将model引入
let User = require('../model/user')
const mongoose = require('mongoose')
// 注册接口
router.post('/toRegister', function(req, res){
    let user = new User(req.body)
    user.save().then(()=>{
          res.json({code:200, message: '注册成功'})
    }).catch(err=>{
        res.json({code:500, message: err})
    })
})
router.post('/toLogin', function(req, res){
    User.findOne({username:req.body.username}).exec().then(result=>{
        console.log(res);
          if(result.password == req.body.password){
               res.json({code:200, message: '登录成功'})
          } else {
              res.json({code: 500, message: '登录失败'})
          }
    }).catch(err=>{
        console.log(err);
        res.json({code: 500, message: '登录失败'})
    })
})
module.exports = router