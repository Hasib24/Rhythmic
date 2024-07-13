import React, { useContext } from 'react';
import { AuthContex } from '../../providers/AuthProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GoogleRegBtn = ({ children }) => {
    const navigate = useNavigate()

    const { user, setUser, googleSignIn } = useContext(AuthContex)


    const handleClick = () => {
        googleSignIn()
            .then(result => {

                const userData = {
                    userName: result.user.displayName,
                    userEmail: result.user.email,
                    // profileImageURL: result.user.photoURL
                }

                axios.post(`/user/google-reg?userEmail=${result.user?.email}&newUser=true`, userData)
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
        <button onClick={handleClick} className=' border border-slate-600  duration-700  active:bg-slate-800  cursor-pointer outline-none rounded-md my-3 w-full md:mx-auto py-2 font-semibold disabled:bg-slate-200'>{children}</button>
    );
};

export default GoogleRegBtn;