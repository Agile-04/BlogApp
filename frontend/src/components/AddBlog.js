import { Button, InputLabel, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const navigate=useNavigate();
  
const[inputs,setInputs]=useState({
  title:"",
  description:"",
  blogcontent:"",
  image:"",
});
// const [body, setBody] = useState();

const handleChange=(e)=>{
  setInputs((prevState)=>({
    ...prevState,
    [e.target.name]:e.target.value,
  }));

};
const sendRequest=async()=>{
  const res=await axios.post("http://localhost:5000/api/blog/add",{
    title:inputs.title,
    description:inputs.description,
    image:inputs.image,
    user:localStorage.getItem("userId")
  }).catch(err=>console.log(err));
  const data=await res.data;
  return data;
};
const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(inputs);
  sendRequest().then((data)=>console.log(data)).then(()=>navigate("/myBlogs"));
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box border={3} borderColor="#5800FF" borderRadius={10} boxShadow="10px 10px 10px #ccc" padding={3} margin={"auto"}
        display='flex' flexDirection={'column'} width={'80%'} marginTop={3}
        >
           <Typography fontWeight={'bold'} padding={3} color="#187498" variant='h2' textAlign={'center'}>Post Your Blog</Typography>
           <InputLabel >Title</InputLabel>
           <TextField name='title' onChange={handleChange} value={inputs.title} margin='normal'/>
           <InputLabel>Description</InputLabel>
           <TextField name='description' onChange={handleChange} value={inputs.description} margin='normal'/>
           <InputLabel>ImageURL</InputLabel>
           <TextField name='image' onChange={handleChange} value={inputs.image} margin='normal'/>
           <Button sx={{mt:2,borderRadius:4}} variant='contained' color='warning' type="submit">Submit</Button>
        </Box>
      </form>
    </div>
  )
}

export default AddBlog