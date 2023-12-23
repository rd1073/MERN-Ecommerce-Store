import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
 
 import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    


 
  const navigate = useNavigate();


  const handleRegister = async () => {
    if (!username || !password) {
      console.log("please fill all the fields");
       return;
    }
    
     
     try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      
      const { data } = await axios.post(
        "http://localhost:5000/auth/signup",
        {
          username,
          password,
          
        },
        config
      );
      console.log(data);
      console.log("regitration succesful");
      sessionStorage.setItem("userInfo", JSON.stringify(data));
      
      navigate('/login');
    } catch (error) {
      console.log(error);
     }




  };



  return (
    
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form"  noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            
            label="Password"
            type="password"
            
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           />
            
           
          <Button
            type="button"
            fullWidth
            variant="contained"
            onClick={handleRegister}
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Grid container>
             
            <Grid item>
              <Link to="/login" variant="body2">
                {"Have an account? Login."}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    
  )
}

export default Register;