// we require mongoose here because it works like a bridge between our db and main file and this file to connect to eachother
const mongoose = require ("mongoose");

// mongo db has its own url/server where it runs the database on.
const URL = "mongodb://localhost:27017/mywork";

// after that we start our mongo server on terminal with 
// the help of brew so : brew services start mongodb-community@6.0

// now we connect our db to our main file
mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// with the help of this we connect our mongoose to our mongodb and it works like app from express
// so we from now on write every comment of databse with db keyword
const db = mongoose.connection;

db.on('connected',()=>{
    console.log("mongoose is connected");
})

db.on('error',(err)=>{
    console.log(err);
})

db.on('disconnected',()=>{
    console.log('mongoose is disconnected');
});


module.exports = db;
