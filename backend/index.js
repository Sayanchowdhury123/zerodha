const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const passport = require("passport");
const passportlocal = require("passport-local");
const bodyparser = require("body-parser");
const Holding = require("./models/holdings");
const Position = require("./models/positionm");
const Order = require("./models/order");
const User = require("./models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken")
app.use(cors());
app.use(bodyparser.json());

dotenv.config();

 const protect = require("../backend/middleware/authmiddleware")
const PORT= process.env.PORT;
const url = process.env.MONGO_URL;

app.get("/allholdings", protect ,async (req,res) => {
    let allholdings = await Holding.find({});
    res.json(allholdings);
})

app.get("/allpostions", protect ,async (req,res) => {
    let allpostions = await Position.find({});
    res.json(allpostions);
})

app.post("/neworder", protect ,async(req,res) => {
    let neworder = new Order({
        name:req.body.name,
        qty:req.body.qty,
        price:req.body.price,
        mode:req.body.mode,
    })
    neworder.save();

    res.json(neworder)
})


app.get("/allorders", protect,async (req,res) => {
    let allorders = await Order.find({});
    res.json(allorders)
})

app.post("/signup",async (req,res) => {
    try {
        let {phone,password} = req.body;
  
        let user = await User.findOne({phone});

        if(user){
            return res.status(400).json({msg:"user already exists"})
        }

        const hashedpassword = await bcryptjs.hash(password,10);
             
        user = new User({
            phone,
            password: hashedpassword,
        })

        await user.save();

        res.status(201).json({msg:"user registerd successfully"})

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"server error"})
    }
})



app.post("/login", async(req,res) => {
    try{

let {phone,password} = req.body;
phone = phone.toString();
 console.log(phone);

const user = await User.findOne({phone});
console.log(user);

if(!user){
    return  res.status(400).json({message: "invalid crediatials"})  ;
}

const ismatch = await bcryptjs.compare(password,user.password);
if(!ismatch){
    return  res.status(400).json({message: "invalid crediatials"})  ;
}

const token = jwt.sign({id: user._id}, process.env.TOKEN, {expiresIn: "14d"});

   console.log("user athenticated", {user,token});

   res.json({
    _id: user._id,
    
    phone: user.phone,
    token
   });

    }catch(error){
        res.status(500).json({message: "server error"})
    }
})

app.listen(PORT,  () => {
    console.log("app started");
    mongoose.connect(url)
    console.log("db connected");
})

