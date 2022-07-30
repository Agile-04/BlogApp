import React, { useState } from 'react'
import {AppBar, Button, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';

const Header = () => {
  const dispatch=useDispatch();
    const isLoggedIn=useSelector(state=>state.isLoggedIn);
    const [value, setvalue] = useState();

  return (
    <AppBar position='sticky' sx={{background:"linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(114,45,253,1) 100%)"}}>
        <Toolbar>
          <Link to="/" style={{textDecoration:'none'}}>   
          <Typography variant='h4'>MyBlogz</Typography>
          </Link>
              {isLoggedIn && <Box display='flex' marginLeft={'auto'} marginRight={'auto'}>
                <Tabs textColor='inherit' value={value} onChange={(e,val)=>setvalue(val)}>
                    <Tab LinkComponent={Link} to="/blogs" label="All Blogs"/>
                    <Tab  LinkComponent={Link} to="/myblogs" label="My Blogs"/>
                    <Tab  LinkComponent={Link} to="/blogs/add" label="Add Blog"/>
                </Tabs>

            </Box>}
            <Box display="flex" marginLeft='auto'>
            {!isLoggedIn && <><Button LinkComponent={Link} to="/auth" variant="contained" sx={{margin:1, borderRadius:10}} color="warning">Login</Button>
             <Button LinkComponent={Link} to="/auth" variant="contained"  sx={{margin:1 ,borderRadius:10}} color='warning'>Signup</Button></>}
                {isLoggedIn && <Button 
                onClick={()=>dispatch(authActions.logout())}
                LinkComponent={Link} to="/auth" 
                variant="contained" 
                 sx={{margin:1 ,borderRadius:10}} 
                 color='warning'>Logout</Button>}
            </Box>
        </Toolbar>
    </AppBar>
    
  )
}

export default Header