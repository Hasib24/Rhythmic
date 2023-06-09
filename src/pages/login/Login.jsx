import React, { useContext, useState } from 'react';
import { Link} from 'react-router-dom';
import GoogleLoginBtn from '../../components/buttons/GoogleLoginBtn';
import { FcGoogle } from 'react-icons/fc';
import { AuthContex } from '../../providers/AuthProvider';

import { useForm } from "react-hook-form";
import useTokenGen from '../../hooks/useTokenGen';
import axios from 'axios';



const Login = () => {
  
    const { user, setUser, signInUser } = useContext(AuthContex)

        
    // Getting JWT Token 
    useTokenGen(user?.email)


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        // console.log(data);
        signInUser(data.email, data.password)
        .then(res =>{
            setUser(res.user)
            axios.get(`/user?email=${res.user.email}`)
        })
        .catch(error =>console.log(error))
    }

 



   

        

    return (
        <div className='p-8 my-10 max-w-md mx-auto justify-center border rounded-md shadow-lg'>

            <form className='p-8' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email", { required: true })} className='outline-none border rounded-md my-3 p-2 w-full md:mx-auto' type="email" name="email" id="email" placeholder='Enter email' />
                <input {...register("password", { required: true })} className='outline-none border rounded-md my-3 p-2 w-full md:mx-auto' type="password" name="password" id="password" placeholder='Enter password' />

                <input className='bg-blue-600 border border-blue-600 duration-700 text-white active:bg-blue-500 hover:bg-white hover:text-slate-800 cursor-pointer outline-none rounded-md my-3 w-full md:mx-auto py-2 font-semibold disabled:bg-slate-200' type="submit" name="submit" id="submit" value="Login" />
              
                <p>Do not have a account ? <Link to='/register' className='text-blue-600 underline'>Registeration</Link></p>


            </form>
            <div className='px-8'>
                <h1 className=' text-center font-bold text-slate-700'>OR</h1>
                <GoogleLoginBtn><FcGoogle className='inline text-xl mx-2'></FcGoogle>Login with Google</GoogleLoginBtn>
            </div>
            
        </div>
    );
};

export default Login;