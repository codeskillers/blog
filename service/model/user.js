let mongoose = require('mongoose')
let Schema = mongoose.Schema

let userSchema = new Schema({
      username: {unique:true,type:String},
      password: String,
      createAt: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('User', userSchema)