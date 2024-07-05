import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLoginBtn from '../../components/buttons/GoogleLoginBtn';
import { FcGoogle } from 'react-icons/fc';
import { AuthContex } from '../../providers/AuthProvider';

import { useForm } from "react-hook-form";
import useTokenGen from '../../hooks/useTokenGen';
import axios from 'axios';


const Login = () => {
    const navigate = useNavigate()
    const { user, setUser, setRole, signInUser } = useContext(AuthContex)


    // Getting JWT Token 
    useTokenGen(user?.email)

    //For Visitor as Admin
    const handleAdminVisitor =()=>{
        if(localStorage.getItem("User role") =="Admin"){
            setValue('email', 'admin_visitor@gmail.com');
            setValue('password', 'admin1@#A')
        }else if(localStorage.getItem("User role") =="Instractor"){
            setValue('email', 'instractor_visitor@gmail.com');
            setValue('password', 'instractor1@#A')
        }
    } 

    useEffect(()=>{
        handleAdminVisitor()
    }, [])


    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        signInUser(data.email, data.password)
            .then(res => {
                setUser(res.user)
                axios.get(`/user?email=${res.user.email}`)
                    .then(response => {
                        setRole(response.data.role)
                        navigate('/')
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }



    return (
        <div className='relative min-h-[100vh] flex justify-center bg-[url("https://images.pexels.com/photos/1528411/pexels-photo-1528411.jpeg")] bg-cover'>
            <div className='mx-3 min-w-[300px] md:mx-auto my-auto p-5 md:px-14 md:py-10 text-slate-100 shadow-2xl rounded-xl  backdrop-blur-sm border'>
                <form className='p-8 max-w-md' onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email", { required: true })} className='outline-none border rounded-md my-3 p-2 w-full md:mx-auto bg-inherit placeholder:text-slate-200' type="email" name="email" id="email" placeholder='Enter email' />
                    <input {...register("password", { required: true })} className='outline-none border rounded-md my-3 p-2 w-full md:mx-auto bg-inherit placeholder:text-slate-200' type="password" name="password" id="password" placeholder='Enter password' />

                    <input className='border duration-700 text-white active:bg-blue-500 hover:bg-white hover:text-slate-800 cursor-pointer outline-none rounded-md my-3 w-full md:mx-auto py-2 font-semibold disabled:bg-slate-200' type="submit" name="submit" id="submit" value="Login" />

                    <p>Don't have an account ? <Link to='/register' className='text-green-400 underline'>Registeration</Link></p>


                </form>
                <div className='px-8'>
                    <h1 className=' text-center font-bold text-slate-100'>OR</h1>
                    <GoogleLoginBtn><FcGoogle className='inline text-xl mx-2'></FcGoogle>Login with Google</GoogleLoginBtn>
                </div>
            </div>
        </div>

    );
};

export default Login;