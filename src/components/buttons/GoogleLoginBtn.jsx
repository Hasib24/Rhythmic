import React, { useContext } from 'react';
import { AuthContex } from '../../providers/AuthProvider';
import axios from 'axios';
import useTokenGen from '../../hooks/useTokenGen';

const GoogleLoginBtn = ({children}) => {

    const { user, setUser, googleSignIn } = useContext(AuthContex)

    // Getting JWT Token 
    useTokenGen(user?.email)


    const handleClick = () =>{
        googleSignIn()
        .then(result =>{
            const userData = {
                name : result.user.displayName,
                email : result.user.email,
                role : ''
            }
            axios.post('/user', userData)
            .then(response => console.log(response))
            .catch(err => console.log(err))

            setUser(result.user)


        })
        .catch(err=> console.log(err))
        
    }
    return (
        <button onClick={handleClick} className=' border border-blue-600 duration-700  active:bg-blue-500  cursor-pointer outline-none rounded-md my-3 w-full md:mx-auto py-2 font-semibold disabled:bg-slate-200'>{children}</button>
    );
};

export default GoogleLoginBtn;