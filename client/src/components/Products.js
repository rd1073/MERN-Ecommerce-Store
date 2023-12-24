import React from 'react'
import { useAuth } from '../context/authContext';
import { useState, useEffect } from "react";
import axios from "axios";
import InputGroup from 'react-bootstrap/InputGroup';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState([]);

    //getall products
    const getAllProducts = async () => {
        try {
        const { data } = await axios.get("http://localhost:5000/all-products");
        setProducts(data.products);
        //console.log(data);
        } catch (error) {
        console.log(error);
         
        }
    };

    useEffect(() => {
        getAllProducts();
      }, []);


    //filtering
    const handleFilter = (value, id) => {
        
        if (value) {
            const filteredProducts = products.filter(
              (product) => product.os === id
            );
            setProducts(filteredProducts);
          } else {
            // Reset the filter to show all products
            getAllProducts();
      }
    }




  return (
    <div className="container-fluid row mt-3 home-page">
  <div className="col-md-9">
    {JSON.stringify(checked, null)}
    <div className="row dashboard">
      <div className="col-md-8">
        <div className="d-flex flex-wrap justify-content-around align-items-center">
          {products?.map((p, index) => (
            <div key={index} className="card m-3" style={{ width: "18rem", boxShadow: "0 6px 12px rgba(0,0,0,0.1)", borderRadius: "12px" }}>
              <div className="card-body">
                <h2 className="card-title" style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "15px" }}>{p.name}</h2>
                <p className="card-text" style={{ fontSize: "1.4rem", marginBottom: "10px" }}>Price: ${p.price}</p>
                <p className="card-text" style={{ fontSize: "1.2rem", marginBottom: "10px" }}>Type: {p.type}</p>
                <p className="card-text" style={{ fontSize: "1.2rem", marginBottom: "10px" }}>Processor: {p.processor}</p>
                <p className="card-text" style={{ fontSize: "1.2rem", marginBottom: "10px" }}>Memory: {p.memory}</p>
                <p className="card-text" style={{ fontSize: "1.2rem", marginBottom: "10px" }}>OS: {p.os}</p>
                <button className="btn btn-info ms-1">
                  More Details
                </button>
                <button
                  className="btn btn-dark ms-1">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  <div className="col-md-3 filters text-center" style={{ textAlign: "left", fontSize: "2.1rem" }}>
    <h4 className="mb-3" style={{  fontSize: "2.1rem" }}>Filter By Category</h4>
    
    <div className="d-flex  align-items-center">
      <input type="checkbox" id="android"  onChange={(e) => handleFilter(e.target.value, "Android 10")}   />
      <label htmlFor="android" style={{ fontSize: "2rem", marginBottom: "10px" }}>Android</label>
    </div>

     
    

    {/* Price filter */}



    <div className="d-flex flex-column mt-3">
      <button
        className="btn btn-danger"
        onClick={() => window.location.reload()}
        style={{ fontSize: "1.6rem" }}
      >
        RESET FILTERS
      </button>
    </div>
  </div>
</div>




    
 

  )
}

export default Products
