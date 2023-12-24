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


  const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    processor: {
      type: String,
      required: true,
    },
    memory: {
      type: String,
      required: true,
    },
    os: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
  });

  const Product = conn.model('Product', productSchema);



module.exports = { conn, User, Product};
