import React, { useState } from 'react'
import { Box } from '@mui/system';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { authActions } from '../store';
import {useNavigate} from 'react-router-dom';
const Auth = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const [inputs, setInputs] = useState({
    name:"",work:"",email:"",password:""
  })
  const [isSignup, setisSignup] = useState(false);
   
  const handleChange=(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }));
  }

  const sendRequest=async(type="login")=>{
   const res=await axios.post(`http://localhost:5000/api/user/${type}`,{
      name:inputs.name,
      work:inputs.work,
      email:inputs.email,
      password:inputs.password
    }).catch(err=>console.log(err));

    const data =res.data;
    console.log(data);
    return data;

  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(inputs);
   if(isSignup){
    sendRequest("signup")
    .then((data)=>localStorage.setItem("userId",data.user._id))
    .then(()=>dispatch(authActions.login())).then(()=>navigate("/blogs"))
    .then(data=>console.log(data));
   }else{
    sendRequest()
    .then((data)=>localStorage.setItem("userId",data.user._id))
    .then(()=>dispatch(authActions.login()))
    .then(()=>navigate("/blogs"))
    .then(data=>console.log(data));
   }
    
  }

  return (
    
    <div>
     <form onSubmit={handleSubmit}>
       <Box display="flex" flexDirection={'column'} alignItems='center' justifyContent={'center '}
       maxWidth={400}
       boxShadow="10px 10px 20px #ccc"
       padding={3}
       margin="auto"
       marginTop={5}
       borderRadius={5}>
          <Typography variant='h4' padding={3} textAlign="center">
            {isSignup?"Signup" : "Login"}
          </Typography>
         {isSignup && <TextField name="name" onChange={handleChange} value={inputs.name} type={'text'} placeholder='name'  margin='normal'/>}
         {isSignup && <TextField name="work" onChange={handleChange} value={inputs.work} type={'text'} placeholder='work'  margin='normal'/>}
         <TextField name="email" onChange={handleChange} value={inputs.email} type={'email'} placeholder='email' margin='normal'/>
          <TextField name="password" onChange={handleChange} value={inputs.password} type={'password'} placeholder='password' margin='normal'/>
          <Button type='submit' variant='contained' sx={{borderRadius:3,marginTop:3}} color='warning'>Submit</Button>
          <Button onClick={()=>setisSignup(!isSignup)} sx={{borderRadius:3,marginTop:3}}>Change to {isSignup ? "Login":"Signup"}</Button>
       </Box>
     </form>
    </div>
  )
}

export default Auth