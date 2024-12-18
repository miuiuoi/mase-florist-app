import React from 'react'
import { Box, Button, Container, Divider, FormControl, FormControlLabel, FormLabel, Link, styled, TextField, Typography, CardContent} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo1 from "../Components/Asset/logo1.png"
import { auth, db } from '../Firebase/Config';
import { FacebookAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import {Link as RouterLink} from "react-router-dom"

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

    const fbProvider = new FacebookAuthProvider();
    const navigate = useNavigate();

    const handleFacebookLogin = async () => {
        try {
            const { user } = await signInWithPopup(auth, fbProvider);
            console.log({ user }); // Thông tin người dùng    

            //Ghi thông tin người dùng vào Firestore
            const userRef = doc(db, 'users', user.uid); // Lấy tham chiếu đến tài liệu
            await setDoc(userRef, {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                providerId: user.providerData[0]?.providerId,
                uid: user.uid,
                createdAt: new Date(),
            }, { merge: true }); // Sử dụng merge để không ghi đè dữ liệu cũ

            console.log("Thông tin người dùng đã được lưu vào Firestore");
            navigate('/'); // Chuyển hướng sau khi đăng nhập thành công
        } catch (error) {
            console.error('Error during Facebook login:', error); // Xử lý lỗi
        }
    };

   
  return (
    <div className='backgroundLogin'>
        <Card>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <img 
                src={logo1} 
                alt='logo' 
                style={{
                    width: '100%', 
                    maxWidth: '100px', // Thay đổi giá trị này theo nhu cầu
                    height: 'auto'
                }} 
            />
        </Box>

            <Typography
                component='h1'
                variant='h4'
                sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                
            >
                Sign in
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
                        <RouterLink 
                            to="/signup"
                            href='#'
                            variant="body2"
                            sx={{alignSelf: 'center'}}
                        >
                            Sign up
                        </RouterLink>
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
                    onClick={handleFacebookLogin}
                >
                    Sign with Facebook
                </Button>
            </Box>
        </Card>
    </div>
  )
}
