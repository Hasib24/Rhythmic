import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContex } from '../providers/AuthProvider';

const useTokenGen = (email) => {
    const {user} = useContext(AuthContex)
    
        useEffect(()=>{
            if(user?.email){

                axios.post('/jwt', { email : email })
                .then(response => console.log(response))
                .catch(error => console.log(error))
        
            }
        }, [user?.email])
    
    

   
};

export default useTokenGen;