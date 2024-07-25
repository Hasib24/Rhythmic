import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLoginBtn from '../../components/buttons/GoogleLoginBtn';
import { FcGoogle } from 'react-icons/fc';
import { AuthContex } from '../../providers/AuthProvider';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useTitle from '../../hooks/useTitle';


const Login = () => {
    useTitle('Login')
    const navigate = useNavigate()
    const { user, setUser, loader, setLoader, signInUser } = useContext(AuthContex)

    //For Admin
    const handleAdminVisitor = () => {
        if (localStorage.getItem("User role") == "Admin") {
            setValue('email', 'admin_visitor@gmail.com');
            setValue('password', 'admin1@#A')
        } else if (localStorage.getItem("User role") == "Instractor") {
            setValue('email', 'instractor_visitor@gmail.com');
            setValue('password', 'instractor1@#A')
        }
    }
    useEffect(() => {
        handleAdminVisitor()
    }, [])

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
    const onSubmit = data => {
        setLoader(true)

        signInUser(data.email, data.password)
            .then(res => {

                axios.get(`/user/email-login?userEmail=${res.user?.email}&newUser=false`)
                    .then(response => {
                        localStorage.setItem('jwtAccessToken', response.headers.authorization)
                        setUser(response.data)
                        setLoader(null)
                        navigate('/')
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='relative min-h-[100vh] flex justify-center bg-[url("https://images.unsplash.com/photo-1617634795446-b58c985ec639?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover'>
            <div className='mx-3 min-w-[300px] md:mx-auto my-auto p-5 md:px-14 md:py-10 text-slate-100 shadow-2xl rounded-xl  backdrop-blur-3xl border border-slate-600 flex flex-col justify-center'>

                <span className={`loading absolute right-1/2 loading-dots loading-lg ${!loader ? 'opacity-0' : 'opacity-75'}`}></span>
                <form className={`p-8 max-w-md ${loader ? 'opacity-0' : 'opacity-100'}`} onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email", { required: true })} className='outline-none border rounded-md my-3 p-2 w-full md:mx-auto bg-inherit placeholder:text-slate-200 border border-slate-600' type="email" name="email" id="email" placeholder='Enter email' />
                    <input {...register("password", { required: true })} className='outline-none border rounded-md my-3 p-2 w-full md:mx-auto bg-inherit placeholder:text-slate-200 border border-slate-600' type="password" name="password" id="password" placeholder='Enter password' />

                    <input className=' duration-700 text-white active:bg-blue-500 hover:bg-white hover:text-slate-800 cursor-pointer outline-none rounded-md my-3 w-full md:mx-auto py-2 font-semibold disabled:bg-slate-200 border border-slate-600' type="submit" name="submit" id="submit" value="Login" />

                    <p>Don't have an account ? <Link to='/register' className='text-green-400 underline'>Registeration</Link></p>


                </form>
                <div className={`p-8 max-w-md ${loader ? 'opacity-0' : 'opacity-100'}`}>
                    <h1 className=' text-center font-bold text-slate-100'>OR</h1>
                    <GoogleLoginBtn><FcGoogle className='inline text-xl mx-2'></FcGoogle>Login with Google</GoogleLoginBtn>
                </div>
            </div>
        </div>

    );
};

export default Login;