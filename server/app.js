const mongoose= require("mongoose");
const express = require("express");
const app = express();
var cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000;

// //Middleware
// const middleware = (req,res,next) =>{
//     console.log(`Hello middleware`);
//     next();
// }
const cors = require("cors");

app.use(cors());
const db= 'mongodb+srv://Abrarsh2209:yfh5JEt7lTb53ZxM@cluster0.2kgbnxq.mongodb.net/AbrarAPI?retryWrites=true&w=majority';
mongoose.connect(db).then(()=>{
    console.log("Success");
}).catch((err)=>console.log("none connection"));

app.use(express.json());
app.use(cookieParser());
app.use(require('./router/auth'));

app.listen(port,()=>{
    console.log(`${port} connected`);
})
