let baseUrl = 'http://localhost:8000/'
let url = {
    toRegister: baseUrl+'user/toRegister', // 用户注册接口
    toLogin: baseUrl+'user/toLogin', // 用户登录接口
    pubArticle: baseUrl+'article/pubArticle', // 发布文章接口
    getArticle: baseUrl+'article/getArticle' // 获取文章接口
}

module.exports = url