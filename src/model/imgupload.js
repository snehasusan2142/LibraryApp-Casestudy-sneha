var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/libraryApp',{ useNewUrlParser: true , useUnifiedTopology: true});
const  Schema = mongoose.Schema;

var photoSchema = new Schema({

  path:  { type: String },

  caption: { type: String }
  });

module.exports = mongoose.model('Photos', photoSchema);