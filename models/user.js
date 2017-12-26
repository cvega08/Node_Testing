const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator')
<<<<<<< HEAD
const jwt = require('jsonwebtoken')
const _ = require('lodash')

var userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minlength: 4,
    required: true
  },
  email: {
    type: String,
    trim: true,
    minlength: 6,
    required: true,
    unique: true,
    validate: {
      validator:  validator.isEmail,
      // validator: (value)=>{
      //   return validator.isEmail(value)
      // },
      message: '{VALUE} is not a valid email'
    }
  },
  tokens: [{
    access:{
      type: String,
      require: true
    },
    token:{
      type: String,
      require: true
    }
  }]
=======

var userSchema = new Schema({
  name:  { type: String, required: true },
  password: { type: String, trim: true, minlength: 6, required : true},
  email: { type: String, 
    trim: true, 
    minlength: 4, 
    required : true, 
    unique : true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  tokens:[{
    access:{ 
      type: String, 
      require: true
    },
    token:{
      type: String, 
      require: true
    }
  }],
  date: { type: Date, default: Date.now },
  hidden: Boolean
>>>>>>> abc93a254bd1e270a293d84ba0a53531de5a0433
});

userSchema.methods.toJSON = function () {
  var user = this
  var userObject = user.toObject()

  return _.pick(userObject, ['_id', 'email','name'])
}

userSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access},'abc123').toString();

  user.tokens.push({access, token})

  return user.save().then(() => {
    return token
  })
}

module.exports = mongoose.model('User', userSchema)