const mongoose = require ('mongoose');
const schema  = mongoose.Schema;
const userSchema = new schema ({
    username: String ,
    password: String,
    email: {
        type : String,
        required : true
    }

})

module.exports = mongoose.model("user",userSchema)