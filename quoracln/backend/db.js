const mongoose = require('mongoose');

const url="mongodb+srv://abhikgupta:vA0Ja5BUNf1a9Gib@abhik.b5c6fai.mongodb.net/test"

module.exports.connect=()=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedtopology:true
    })
    .then(()=>{
        console.log('MongoDb connected succesfully')
    })
    .catch((error)=>console.log("Error:",error));
};