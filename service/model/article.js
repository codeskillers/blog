let mongoose = require('mongoose')
let Schema = mongoose.Schema

let articleSchema = new Schema({
    title: String,
    type: String,
    content: String,
    createAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Article', articleSchema)