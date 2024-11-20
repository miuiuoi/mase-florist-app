import { AppBar, Box, Button, Container, Icon, IconButton, Link, Menu, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import logo1 from "../Asset/logo1.png"

import { SearchOutlined, ShoppingCartCheckout } from '@mui/icons-material';


const pages = [
    {name: "CỬA HÀNG", id: "cuahang"},
    {name: "WORKSHOP", id: "workshop"},
    {name: "VỀ CHÚNG MÌNH", id: "vechungminh"},
]

export default function Navbar() {
  return (
    <div>
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" sx={{padding: "0 10rem", height: "100px", justifyContent: "center"}}>
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                    <Link 
                        href="/" 
                        underline="none" 
                        sx={{
                            color: "inherit",
                            fontSize: "50px",
                            cursor: "pointer"
                        }}
                    >
                    Logo
                    </Link>
                </Typography>
                <Box>
                    <Stack
                        direction='row'

                        sx={{
                            display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        {pages.map(page => (
                            <Link
                                underline='none'
                                sx={{
                                    position: "relative",
                                    display: "inline-block",
                                    color: 'white',
                                    padding: "10px 20px",
                                    cursor: "pointer",
                                    '&:hover::after': {
                                        content: '""',
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        height: '2px',
                                        backgroundColor: 'white',
                                        transform: 'scaleX(0)',
                                        transition: 'width 0.3s ease',
                                        transformOrigin: 'right',
                                    },
                                    
                                    }}
                                    key={page.id}
                            >
                                {page.name}
                            </Link>
                        ))}
                    </Stack>
                </Box>
                <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                >
                    <ShoppingCartCheckout />
                </IconButton>
                <IconButton
                    size="large"
                    aria-label="search"
                    color="inherit"
                >
                    <SearchOutlined />
                </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
  )
}
