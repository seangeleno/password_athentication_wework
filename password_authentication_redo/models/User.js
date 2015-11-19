var mongoose = require('mongoose')
,   bcrypt   = require('bcrypt-nodejs')
,   Schema   = mongoose.Schema

//write the userSchema now
var userSchema = new Schema({
  local:    {name: String, email: String, password: String}
, facebook: {id: String, name: String, token: String, email: String}
})
