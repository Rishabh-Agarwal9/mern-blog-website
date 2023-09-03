require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs'); 
const app = express();

const salt = bcrypt.genSaltSync(10);

app.use(cors()); 
app.use(express.json());
mongoose.connect(process.env.MONGO_TOKEN);
app.post('/register',async (req,res)=>{
    const {username, password}=req.body;
    try{
        const UserDoc= await User.create({
            username,
            password: bcrypt.hashSync(password,salt)
        });    
        res.json(UserDoc);
    } catch(e){
        res.status(400).json(e);
    }
    
});

app.post('/login', async (req,res)=>{
    const{username, password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if(passOk){
        //logged in
    }
    else{
        res.status(400).json('Wrong credentials');
    }



})
  

app.listen(4000);


