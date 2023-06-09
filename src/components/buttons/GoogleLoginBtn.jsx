import React, { useContext } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../providers/AuthProvider';
import axios from 'axios';

const GoogleLoginBtn = ({children}) => {

    const { setUser, googleSignIn } = useContext(AuthContex)

    const location = useLocation()



    const handleClick = () =>{
        googleSignIn()
        .then(result =>{
            const userData = {
                name : result.user.displayName,
                email : result.user.email,
                role : ''
            }
            axios.post('http://localhost:5000/user', userData)
            .then(response => console.log(response))
            .catch(err => console.log(err))
            // setUser(result.user)
        })
        .catch(err=> console.log(err))
        
    }
    return (
        <button onClick={handleClick} className=' border border-blue-600 duration-700  active:bg-blue-500  cursor-pointer outline-none rounded-md my-3 w-full md:mx-auto py-2 font-semibold disabled:bg-slate-200'>{children}</button>
    );
};

export default GoogleLoginBtn;