const express=require('express');
const {connectDb}=require('./db/connectDb');
const methodOverride = require("method-override");
const cors = require('cors');

const cookieParser=require('cookie-parser');
require('dotenv').config();

const jobRoutes=require('./routes/jobRoutes');



const app=express();
const port=process.env.PORT

app.use(methodOverride("_method")); 


app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());

 

app.use(cors({
  origin: 'https://jobmanage-b074.onrender.com', 
  credentials: true
}));

app.use('/job',jobRoutes);
app.get('/ping',(req,res)=>{
    res.send('Welcome to the Job API');
})



  

app.listen(port,()=>{
    console.log(`listening on ${port}`);
    connectDb();
})