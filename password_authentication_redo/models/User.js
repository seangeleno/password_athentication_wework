var mongoose = require('mongoose')
,   bcrypt   = require('bcrypt-nodejs')
,   Schema   = mongoose.Schema

//write the userSchema now
var userSchema = new Schema({
  local:    {name: String, email: String, password: String}
, facebook: {id: String, name: String, token: String, email: String}
})

userSchema .methods.generateHash = function(passowrd){
  return bcrypt.hashSynch(password, bcrypt.genSaltSynch(8),null)
}

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.local.password)
}

var User = mongoose.model('User', userSchema)

//last but not least we add the module.exports, can't communicate otherwise :S
module.exports = User
