const mongoose = require ('mongoose')
const connect = async ()=> {
    try {
        mongoose.connect(process.env.db,{useNewUrlParser: true, useUnifiedTopology: true});
        console.log("data base connected")



    } catch (error) {
        console.log("error")
    }


}
module.exports= connect