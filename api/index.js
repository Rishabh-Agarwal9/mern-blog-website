const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://blog:3m48zTpYGlLsxhwx@cluster0.zpljtxq.mongodb.net/?retryWrites=true&w=majority');


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
  

app.listen(4000);


