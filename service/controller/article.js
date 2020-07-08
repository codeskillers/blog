const express = require('express')
const router = express.Router()
let Article = require('../model/article')
const mongoose = require('mongoose')

// 发布接口
router.post('/pubArticle', async function(req,res){
      let article = new Article(req.body)
      try {
         await article.save()
         res.json({code: 200, message: '发布成功'})
      } catch (error) {
         res.json({code: 500, message: '发布失败'})
      }
})
// 获取文章列表接口
router.get('/getArticle', async (req, res)=>{
     let type = req.query.type
     if(type){
         try {
            let result = await Article.find({type: type}).exec()
            res.json({code: 200, message: result})  
         } catch (error) {
         res.json({code: 500, message: error})
         }
     } else {
         try {
            let result = await Article.find().exec()
            res.json({code: 200, message: result})  
         } catch (error) {
         res.json({code: 500, message: error})
         }
     }
})
module.exports = router