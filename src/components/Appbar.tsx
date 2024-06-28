import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MenuIcon from '@mui/icons-material/Menu';

export default function Appbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info('Yoğun trafik yaşanıyor, lütfen bir dakika bekleyin.', {
        position: 'top-center',
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  const menuItems = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Hizmetler', href: '#services' },
    { name: 'Hakkında', href: '#about' },
    { name: 'Yorumlar', href: '#reviews' },
    { name: 'Doktorlar', href: '#doctors' },
    { name: 'Contact', href: '#contact' },
  ];

  const renderMenuItems = (
    onClick: React.MouseEventHandler<HTMLDivElement> | undefined
  ) => (
    <List>
      {menuItems.map((item, index) => (
        <ListItem button key={index} onClick={onClick}>
          <ListItemText>
            <Link to={item.href}>{item.name}</Link>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'white',
      }}>
      <Container
        sx={{
          maxWidth: { xs: '100%', sm: '100%', md: '1440px', lg: '1440px' },
          margin: 'auto',
          height: '100%',
        }}>
        <Toolbar
          sx={{
            padding: { xs: '0 16px', md: '0 32px' },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '80px',
          }}>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
            }}>
            <Typography
              sx={{
                color: '#1A8EFD',
                letterSpacing: '6px',
                fontSize: '30px',
                fontWeight: 'bold',
              }}>
              Health
              <span
                style={{
                  color: '#54de54',
                  fontSize: '40px',
                  fontWeight: 'bold',
                }}>
                +
              </span>
            </Typography>
          </Link>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              listStyleType: 'none',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '32px',
              fontFamily: 'Rubik sans serif',
            }}>
            {menuItems.slice(0, 5).map((item, index) => (
              <Button key={index} color="inherit">
                <Link
                  to={item.href}
                  style={{
                    textDecoration: 'none',
                    textTransform: 'none',
                    color: 'black',
                    fontSize: '18px',
                    letterSpacing: '.8px',
                  }}>
                  {item.name}
                </Link>
              </Button>
            ))}
          </Box>
          <Button
            sx={{
              padding: 1,
              color: 'white',
              border: '1px solid transparent',
              borderRadius: '28px',
              outline: 'transparent',
              background: '#1A8EFD',
              fontSize: { xs: '14px', md: '18px' },
              letterSpacing: '.8px',
              cursor: 'pointer',
              transition: 'all .4s ease',
              textTransform: 'none',
              display: { xs: 'none', md: 'flex' },
              '&:hover': {
                color: '#1A8EFD',
                backgroundColor: 'transparent',
                border: '1px solid #1A8EFD',
              },
            }}
            disabled={isButtonDisabled}
            onClick={handleChatBtnClick}>
            Canlı Sohbet
          </Button>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={toggleNav}>
            <MenuIcon
              sx={{
                color: 'black',
              }}
            />
          </IconButton>
        </Toolbar>
        <Drawer anchor="right" open={nav} onClose={toggleNav}>
          <IconButton onClick={toggleNav}>
            <MenuIcon />
          </IconButton>
          {renderMenuItems(toggleNav)}
        </Drawer>
      </Container>
      <ToastContainer />
    </AppBar>
  );
}
