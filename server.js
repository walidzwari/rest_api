const express = require("express");
const connect = require ("./config/connectdb");
const User = require ("./models/User");
require("dotenv").config({ path: "./config/.env" });




const app = express();
app.use(express.json())
connect()


app.post("/add_users", async (req,res)=>{
    const {username,password,email} = req.body;
    const newUser = new User({ username,password,email});
    try {
        let user = await newUser.save();
        res.send(user)
    } catch (error) {
        res.send(error)
    }

}
);
app.get("/get_users", async (req,res)=>{
  try {
      let users = await User.find();
      res.send(users)
  } catch (error) {

      res.send (error);
  }
}
);
app.delete ("/delete_user/:userID", async (req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.userID);
        res.send ({message:" user deleted successfully"});
    } catch (error) {
        res.send(error);
        
    }
});
app.put("/edit_user/:userID", async (req,res)=>{
    try {
        let editedUser = await User.findByIdAndUpdate(
            req.params.userID,
            {...req.body},
            {new:true}
        );
        res.send(editedUser);
    } catch (error) {
        res.send (error);
    }
})










const PORT=5000;
app.listen(PORT,(err)=>
err ? console.error(err): console.log(`server is running on ${PORT}`))

