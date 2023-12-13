const mongoose = require("mongoose");
const port = 8000;

async function connectMongoDB(url){
    return mongoose
    .connect(url)
}

module.exports = {
    connectMongoDB,
}

.then( ()=> console.log("mongo connected "))
.catch((err)=> console.log("mongoDB connection failed ", err));
