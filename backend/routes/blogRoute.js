import express from 'express';
import { addBlogs, deleteBlog, getAllblogs, getById, getUserById, updateBlog } from '../controllers/BlogController';

const blogRouter=express.Router();
 
blogRouter.get("/",getAllblogs);
blogRouter.post("/add",addBlogs);
blogRouter.put("/updateblog/:id",updateBlog)
blogRouter.get("/:id",getById);
blogRouter.delete("/:id",deleteBlog);
blogRouter.get("/user/:id",getUserById)

export default blogRouter;