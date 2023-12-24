const { Product }=require("../config/db")



//get all products
const getAllProduct= async (req, res) => {
    try {
      const products = await Product
        .find({})
    
      res.status(200).send({
        success: true,
        
        products,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Erorr in getting products",
        error: error.message,
      });
    }
  };




module.exports={getAllProduct, getAllProduct}