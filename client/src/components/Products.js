import React from 'react'
import { useAuth } from '../context/authContext';
import { useState, useEffect } from "react";
import axios from "axios";


const Products = () => {
    const [products, setProducts] = useState([]);

    //getall products
    const getAllProducts = async () => {
        try {
        const { data } = await axios.get("http://localhost:5000/all-products");
        setProducts(data.products);
        console.log(data);
        } catch (error) {
        console.log(error);
         
        }
    };

    useEffect(() => {
        getAllProducts();
      }, []);





  return (
    <div className="row dashboard">
    
    <div className="col-md-9 ">
       
      <div className="d-flex flex-wrap">
        {products?.map((p,index) => (
          
            <div key={index} className="card m-2" style={{ width: "18rem" }}>
               
              <div className="card-body">
                <h2 className="card-title">{p.name}</h2>
                <p className="card-text">{p.price}</p>
                <p className="card-text">{p.type}</p>
                <p className="card-text">{p.processor}</p>
                <p className="card-text">{p.memory}</p>
                <p className="card-text">{p.os}</p>

              </div>
            </div>
          
        ))}
      </div>
    </div>
  </div>
  )
}

export default Products
