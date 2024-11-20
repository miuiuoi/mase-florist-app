import React from 'react'
import banner1 from "../Asset/banner1.webp"
import { Box, Button, Container, Grid, Grid2, Icon, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { EastOutlined, Grid3x3 } from '@mui/icons-material'
import logo1 from "../Asset/logo1.png"
import cuahang from "../Asset/cuahang.jpg"
import workshop1 from "../Asset/workshop1.webp"
import ourstory from "../Asset/ourstory.jpg"

export default function Hero() {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '600px' }}>
      <img src={banner1} alt='banner' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

      <Box 
          sx={{ 
              position: 'absolute', 
              top: '60%', 
              left: '24%', 
              transform: 'translate(-50%, -50%)', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center'
          }}
      >
          <Button 
              variant="contained" 
              color="primary" 
              endIcon={<EastOutlined />} // Thêm biểu tượng
          >
              Tìm hiểu thêm
          </Button>
      </Box>

      <Box>
        <Typography variant="h4" component="div" 
          sx={{ 
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            padding: "50px"
          }}
        >
          Ở Yên, chúng mình bán cây
          và những niềm vui bình yên
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{padding: "50px"}}>
      <Box container display="flex" flexWrap="wrap" justifyContent="space-between" spacing={2}>
        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: "100",
            height: "100",
            borderRadius: 1,
            bgcolor: "gray",
            position: "relative"
          }}
          flexBasis={{ xs: '100%', sm: '32%' }}
        >
          <img src={cuahang} alt='cuahang' style={{width: "100%", height: "100%", objectFit: "cover", position: "absolute"}}/>
          
        </Box>
        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: "100",
            height: "100",
            borderRadius: 1,
            bgcolor: "gray",
            position:"relative"
          }}
          flexBasis={{ xs: '100%', sm: '32%' }}
        >
          <img src={workshop1} alt='cuahang' style={{width: "100%", height: "100%", objectFit: "cover", position: "absolute"}}/>
        </Box>
        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: "300px",
            
            bgcolor: "gray",
            position: "relative"
          }}
          flexBasis={{ xs: '100%', sm: '32%' }}
        >
          <img src={ourstory} alt='cuahang' style={{width: "100%", height: "100%", objectFit: "cover", position: "absolute"}}/>
        </Box>
      </Box>
      </Container>
      
    </Box>
  )
}
