require('dotenv').config();

const express = require("express");
const conn=require("./config/db")
const app = express();
const cors = require('cors');

const authRoutes=require("./routes/authRoutes")



app.use(express.json());

app.use(
    cors({
      origin: "http://localhost:3000",
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      // <-- location of the react app were connecting to
      credentials: true,
    }) 
  );
app.use(cors());

//auth api
app.use("/auth", authRoutes);

app.listen(process.env.PORT,console.log(`Server running on 5000`));
