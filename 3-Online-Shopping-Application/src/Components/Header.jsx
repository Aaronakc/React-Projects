import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';
import { Link, TextField } from '@mui/material';
import { isLoggedIn } from '../Redux/action';
import Login from '../Pages/Login';
import { useNavigate } from 'react-router-dom';





function Header() {
  const user=isLoggedIn()
  const cart_items=useSelector(store=>store.cartStore.cart_items)
  
  const pages =[
 {
    title:'Product',
    link: '/'
  },
  {
    title:
     `${cart_items.length > 0? `Cart(${cart_items.length})`: 'Cart'}`,
     link: '/cart'
  },
  {
    title: 'Blogs',
    link:'/blogs'
  },
  {
    title: 'Contact',
    link: '/contact'
  }
]

const navigate=useNavigate()
  const handleLogOut=()=>{
    localStorage.removeItem('userInfo')
    navigate('/login')
  }

const settings = [
  {
    title:'Profile',
    action:()=>{}
  },
  {
    title:'Account',
    action:()=>{}
  },
  {
    title:'Dashboard',
    action:()=>{}
  },
  {
    title:'Logout',
    action:handleLogOut
  }
];
  // ['Products', 
  //   `${cart_items.length > 0? `Cart(${cart_items.length})`: 'Cart'}`, 
  //   'Blog',
  //   'Contact'];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
 


  return (
    <AppBar position="static" sx={{ backgroundColor: '#212121' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
      
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',

              textDecoration: 'none',
            }}
          >
            STORE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <Link href={page.link} underline='none'>
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center'}}>{page.title}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
      
       
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          STORE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link href={page.link} underline='none'>
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
              </Link>
            ))}
          </Box>


          {/* <Box style={{marginLeft:'10px'}}>
      <TextField placeholder='search' style={{backgroundColor: 'white', color: 'black' }} />
    </Box> */}





          {
            user?
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar sx={{ bgcolor: '#009688', color: 'white' }}>
        A
      </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }} onClick={setting.action}>{setting.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> 
          :
          <Link href='/login' underline='none' color='white' fontWeight={'bold'}>
          LOGIN
          </Link>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
