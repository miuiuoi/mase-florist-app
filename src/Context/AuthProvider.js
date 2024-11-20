import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/Config';
import { CircularProgress } from '@mui/material';

export const AuthContext = React.createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const {displayName, email, uid, photoURL} = user;
                setUser({displayName, email, uid, photoURL});
                setIsLoading(false);
                navigate('/')
                return;
            }
            else{
                setUser({});
                setIsLoading(false);
                navigate('/login')
            }
        })

        return () => {
            unsubscribe();
        };
    }, [navigate]);

  return (
    <AuthContext.Provider value={{user}}>
        {isLoading ? <CircularProgress style={{ position: 'fixed', inset: 0 }}/> : children} 
    </AuthContext.Provider >
  )
}
