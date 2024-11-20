import React from 'react'
import { Box, Button, Container, Divider, FormControl, FormControlLabel, FormLabel, Link, styled, TextField, Typography, CardContent} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const Card = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '450px',
    },
    boxShadow:
      'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
      boxShadow:
        'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
  }));

export default function Login() {
  return (
    <div className='backgroundLogin'>
        <Card>
            <Typography
                component='h1'
                variant='h4'
                sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
            >
                Sign Up
            </Typography>
            <Box
                component='form'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    gap: 2
                }}
            >
                <FormControl>
                    <FormLabel>Full Name</FormLabel>
                    <TextField
                        id='fullName'
                        type='text'
                        name='fullName'
                        placeholder='Mason Mouse'
                        autoComplete='fullName'
                        required
                        fullWidth
                        variant='outlined'
                    >
                        
                    </TextField>
                </FormControl>

                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <TextField
                        id='email'
                        type='email'
                        name='email'
                        placeholder='email@.gmail.com'
                        autoComplete='email'
                        autoFocus
                        required
                        fullWidth
                        variant='outlined'
                    ></TextField>
                </FormControl>
                <FormControl>
                    
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <FormLabel>Password</FormLabel>
                        <Link
                            component="button"
                            type="button"
                            variant="body2"
                            sx={{ alignSelf: 'baseline' }}
                            >
                            Forgot your password?
                            </Link>
                    </Box>
                    <TextField
                        id='password'
                        type='password'
                        name='password'
                        placeholder='••••••••••••'
                        required
                        fullWidth
                        variant='outlined'
                    ></TextField>
                </FormControl>
                
                <Button
                    type='submit'
                    variant='contained'
                    fullWidth
                >
                    Sign in
                </Button>

                <Typography sx={{textAlign: 'center'}}>
                    Don't have an account? {' '}
                    <span>
                        <Link 
                            href='#'
                            variant="body2"
                            sx={{alignSelf: 'center'}}
                        >
                            Sign up
                        </Link>
                    </span>
                </Typography>
            </Box>

            <Divider>or</Divider>
            <Box sx={{
                display: 'flex', 
                flexDirection: 'column',
                gap: 1
            }}>
                <Button
                    variant='outlined'
                    startIcon={<GoogleIcon/>}
                    fullWidth
                >
                    Sign with Google
                </Button>

                <Button
                    variant='outlined'
                    startIcon={<FacebookIcon/>}
                    fullWidth
                >
                    Sign with Facebook
                </Button>
            </Box>
        </Card>
    </div>
  )
}
