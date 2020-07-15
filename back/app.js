const express = require("express");
const mongoose= require('mongoose');
const morgan = require("morgan");
const cors = require("cors");

const session = require("express-session");
const FileStore = require("session-file-store")(session);
const cookieParser = require("cookie-parser");
const authRouter = require('./auth')



const app = express();

mongoose.connect("mongodb://localhost:27017/todoBase", {  
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true
});



app.use(cors());

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

app.get('/',(req,res) => {
  console.log('yoooooooo');
  res.send('done!')
})

app.use(
  session({
    store: new FileStore(),
    key: "user_sid",
    secret: "anything here",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000
    }
  })
  );
  
  app.use('/auth',authRouter)


app.listen(4000,() => {
  console.log("done!");
})






