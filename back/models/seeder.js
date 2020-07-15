const mongoose = require('mongoose');
const Todo = require('./todos');

mongoose.connect("mongodb://localhost:27017/todoBase", {  
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true
});
 

