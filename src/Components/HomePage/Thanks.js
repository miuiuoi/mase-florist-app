import { Box, Card, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import {cooperation} from "../Asset/Cooperation"

export default function Thanks() {
  return (
    <Container>
        <Box sx={{ position: 'relative', width: '100%', marginTop: '550px'}}>
            <Typography variant="h4" component="div" 
          sx={{ 
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            padding: "50px"
          }}>
                Yên cảm ơn các đối tác
                đã tin tưởng và đồng hành
            </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '100px'}}>
            {cooperation.map((cooper) => (
                <Card key={cooper.id} sx={{ margin: '10px', width: '150px', objectFit: "cover" }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={cooper.image} // Đường dẫn đến hình ảnh
                        alt={cooper.name}
                    />
                </Card>
            ))}
        </Box>
    </Container>
  )
}
