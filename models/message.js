// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var messageSchema = new Schema({
  message: { type: String, required: true, unique: false },
  userid: { type: String, required: true, unique: true },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it

var Message = mongoose.model('Message', messageSchema);

// make this available to our users in our Node applications

module.exports = Message;

