import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const BlogCard = ({id,isUser,title,description,imageurl,username}) => {
 const navigate=useNavigate();
 const handleEdit=(e)=>{
  navigate(`/myblogs/${id}`);
 }
 const deleteRequest=async()=>{
  const res=await axios.delete(`http://localhost:5000/api/blog/${id}`).catch(err=>console.log(err))
  const data=res.data;
  return data;
 }
 const handleDelete=(e)=>{
   deleteRequest().then(()=>navigate("/")).then(()=>navigate("/blogs"));
 }

  console.log(title,isUser);
  return (
    <div>  <Card sx={{ width: '40%',margin:'auto',mt:2,padding:3,
    boxShadow:"5px 5px 10px #ccc",":hover":{
        boxShadow:"10px 10px 20px #764AF1"
    }}}>
    {isUser && (
      <Box display='flex'>
        <IconButton onClick={handleEdit} sx={{marginLeft:'auto'}}><ModeEditOutlineIcon/></IconButton>
        <IconButton onClick={handleDelete}><DeleteIcon/></IconButton>
      </Box>
    )}
    

    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
          {username.charAt(0)}
        </Avatar>
      }
      
      title={title}
      // subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="194"
      image={imageurl}
      alt="Paella dish"
    />
    <CardContent>
      <hr/>
      <br/>
      <Typography variant="body2" color="text.secondary">
       <b>{username}</b>{":"} {description}
      </Typography>
    </CardContent>
   
  </Card></div>
  )
}
  
export default BlogCard