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

  const corsOptions = {
    origin: ['http://localhost:5173',], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true, 
};

app.use(cors(corsOptions));


app.use('/job',jobRoutes);



  

app.listen(port,()=>{
    console.log(`listening on ${port}`);
    connectDb();
})