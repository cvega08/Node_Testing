'use strict'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema({
  name:  { type: String, required: true, trim: true },
  email:   String,
  date: { type: Date, default: Date.now },
  updateAt: {type: Number, default: null },
  _creator:{ type: mongoose.Schema.Types.ObjectId, require: true}
});

module.exports = mongoose.model('Cliente', clienteSchema);