import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import AnimationData from '../Animation/Animation';
import { Link } from 'react-router-dom';
export default function NavBar() {
    
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="relative"  style={{backgroundColor :"blueviolet", color:'black', boxShadow: 'none',display:'flex', justifyContent:'space-evenly',width:'99vw'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,size:'1000'}}
          >
            <HomeIcon sx={{ '& :hover': { color:'purple'}}}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,flexBasis:'50%',color:'black',fontSize:'2rem',fontWeight:'1000'}} >
            Student Dasboard
          </Typography>
          <AnimationData />
          <Link to='/Login'>
          <Button color="inherit" className='button' style={{backgroundColor :"black",borderRadius:'15px',flexBasis:"10%",color:'white'}}>Login</Button>
          </Link>
          <Link to='/SignUp'>
          <Button color="inherit" className='button' style={{backgroundColor :"white",color:'black',border:'2px solid white',borderRadius:'15px',flexBasis:"10%"}}>SignUp</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}