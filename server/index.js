require('dotenv').config();

const express = require("express");
const conn=require("./config/db")
const app = express();

const authRoutes=require("./routes/authRoutes")



app.use(express.json());

//auth api
app.use("/auth", authRoutes);

app.listen(process.env.PORT,console.log(`Server running on 5000`));
