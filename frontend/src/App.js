import Header from "./components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import UserBlog from "./components/UserBlog";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import Auth from './components/Auth';
import { useSelector } from "react-redux";
import Home from "./components/Home";


function App() {
 const isLoggedIn=useSelector(state=>state.isLoggedIn);
 console.log(isLoggedIn);

  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      
      <main>
      <Routes>
         <Route path="/" element={<Home/>}/>
       { !isLoggedIn ?(<Route path="/auth" element={<Auth/>}/>):
          <>
           <Route path="/blogs" element={<Blog/>}/>
           <Route path="/myblogs" element={<UserBlog/>}/>
           <Route path="/myblogs/:id" element={<BlogDetail/>}/>
           <Route path="/blogs/add" element={<AddBlog/>}/>
           <Route index
           element={<div>go to login</div>}
          />
           </>}

        </Routes>
      </main>

    </React.Fragment>

  );
  
}

export default App;
