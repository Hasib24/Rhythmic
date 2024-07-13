import React, { useContext } from 'react';
import { AuthContex } from '../../providers/AuthProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GoogleLoginBtn = ({ children }) => {
    const navigate = useNavigate()

    const { user, setUser, googleSignIn } = useContext(AuthContex)

    const handleClick = () => {
        googleSignIn()
            .then(result => {
                axios.get(`/user/google-login?userEmail=${result.user?.email}&newUser=false`)
                    .then(response => {
                        localStorage.setItem('jwtAccessToken', response.headers.authorization)
                        setUser(response)
                        navigate('/')
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

    }
    return (
        <button onClick={handleClick} className=' border  duration-700  active:bg-slate-800  cursor-pointer outline-none rounded-md my-3 w-full md:mx-auto py-2 font-semibold disabled:bg-slate-200 border border-slate-600'>{children}</button>
    );
};

export default GoogleLoginBtn;