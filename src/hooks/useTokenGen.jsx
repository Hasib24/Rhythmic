import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContex } from '../providers/AuthProvider';

const useTokenGen = (email) => {
    const {user} = useContext(AuthContex)
    
        useEffect(()=>{
            if(user?.email){

                axios.post('/jwt', { email : email })
                .then(response => localStorage.setItem('jwtAccessToken', JSON.stringify(response.data)))
                .catch(error => console.log(error))
        
            }
        }, [user?.email])
    
    

   
};

export default useTokenGen;