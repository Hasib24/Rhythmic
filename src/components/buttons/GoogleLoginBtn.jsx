import React, { useContext } from 'react';
import { AuthContex } from '../../providers/AuthProvider';
import axios from 'axios';
import useTokenGen from '../../hooks/useTokenGen';
import { useNavigate } from 'react-router-dom';

const GoogleLoginBtn = ({ children }) => {
    const navigate = useNavigate()

    const { user, setUser, googleSignIn } = useContext(AuthContex)

    // Getting JWT Token 
    useTokenGen(user?.email)


    const handleClick = () => {
        googleSignIn()
            .then(result => {

                console.log(result);
                const userData = {
                    userName: result.user.displayName,
                    userEmail: result.user.email,
                    profileImageURL: result.user.photoURL
                }

                axios.post('/user/signup', userData)
                    .then(response => {

                        localStorage.setItem('jwtAccessToken', response.headers.authorization)
                        setUser(response.data[0])
                        navigate('/')
                        
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

    }
    return (
        <button onClick={handleClick} className=' border border-blue-600 duration-700  active:bg-blue-500  cursor-pointer outline-none rounded-md my-3 w-full md:mx-auto py-2 font-semibold disabled:bg-slate-200'>{children}</button>
    );
};

export default GoogleLoginBtn;