import React from 'react'
import { useAuth } from '../context/authContext';
import { useState, useEffect } from "react";

const Home = () => {
  const [auth, setAuth,
    log, setLog]=useAuth()


  return (
    <div>
      <h1>Home</h1>
      <h2>{JSON.stringify(auth,null,4)}</h2>
       

    </div>
  )
}

export default Home
