const mongoose = require("mongoose")
require('dotenv').config();

const conn = mongoose.createConnection(process.env.MONGO_URL);
conn.on('connected', () => {
  console.log('Mongoose connected mongodb');
});
conn.on('error', (err) => {
  console.error(`Mongoose connection error: ${err}`);
});

 
const userSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
          
      
      },
      
      password: {
        type: String,
        required: true,
      },
      
    },
    { timestamps: true }
  );

  const User = conn.model('User', userSchema);







module.exports = { conn, User};
