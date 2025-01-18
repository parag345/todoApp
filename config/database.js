const mongoose = require('mongoose');

// With the help of config data of .env get loaded in process.env
require("dotenv").config();

function dbConnect(){
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log("database connection is successfull")})
    .catch((err)=>{
        console.log("issue in db");
        console.log(err.message);
        //process.exit() is a method provided by the global process object that terminates the Node.js process.
        process.exit(1);
    });
}

module.exports = dbConnect; 