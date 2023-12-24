import React from 'react'
import { useAuth } from '../context/authContext';
import { useState, useEffect } from "react";


const Profile = () => {
  const [auth, setAuth]=useAuth();



  return (
    <div>
       <h1>Profile</h1>
      <h2>{JSON.stringify(auth,null,4)}</h2>


    </div>
  )
}

export default Profile;
