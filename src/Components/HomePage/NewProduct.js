import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import banner from "../Asset/banner1.webp"
import { EastOutlined } from '@mui/icons-material'
import cayluu from "../Asset/cayluu.webp"
import caynho from "../Asset/caynho.webp"
import caytao from "../Asset//caytao.webp"

export default function () {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '600px', marginTop: '650px', marginBottom: '100px'}}>
        <img src={banner} alt='banner' style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>

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
          <img src={cayluu} alt='cuahang' style={{width: "100%", height: "100%", objectFit: "cover", position: "absolute"}}/>
          
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
          <img src={caynho} alt='cuahang' style={{width: "100%", height: "100%", objectFit: "cover", position: "absolute"}}/>
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
          <img src={caytao} alt='cuahang' style={{width: "100%", height: "100%", objectFit: "cover", position: "absolute"}}/>
        </Box>
      </Box>
      </Container>
    </Box>
  )
}
