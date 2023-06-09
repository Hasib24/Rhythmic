import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import GoogleLoginBtn from '../../components/buttons/GoogleLoginBtn';
import { useForm } from "react-hook-form";
import { AuthContex } from '../../providers/AuthProvider';
import axios from 'axios';

const Register = () => {

    const [show, setShow] = useState(null);
    const {setUser, createUser, updateUser } = useContext(AuthContex)



    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{

        createUser( data.email, data.password )
        .then(res =>{
            updateUser(data.name, data.photourl)
            .then(()=>{
                //profile updated
                //send user data to DB for each successful regestatison
                const userData ={
                    name : data.name,
                    email : data.email,
                    role : ''
                }
                axios.post('http://localhost:5000/user', userData)
                .then(response => console.log(response))
                .catch(err => console.log(err))
            })
            .catch((err)=>console.log(err))

            res.user.displayName = data.name;
            res.user.photoURL = data.photourl;
            setUser(res.user)
        })
    }

    


    return (
        <div className='p-8 my-10 max-w-md mx-auto justify-center border rounded-md shadow-lg'>

            <form className='p-8' onSubmit={handleSubmit(onSubmit)}>
                
                <input {...register("name", { required: true })} className='outline-none border rounded-md my-3 p-2 w-full md:mx-auto' type="name" name="name" id="name" placeholder='Enter name'/> <br />
                {errors.name?.type === 'required' && <p className='text-red-600 -mt-3 pl-1'>Your name is required</p>}
                
                <input {...register("email", { required: true })}  className='outline-none border rounded-md my-3 p-2 w-full md:mx-auto' type="email" name="email" id="email" placeholder='Enter email' /> <br />
                {errors.email?.type === 'required' && <p className='text-red-600 -mt-3 pl-1'>Your email is required</p>}
                
                <input {...register("password", { required: true, minLength :6, maxLength: 8, pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].)(?=.*[a-z])/ })}  className='outline-none border rounded-md my-3 p-2 w-full md:mx-auto' type={show ? 'password' : 'text'} name="password" id="password" placeholder='Password'/> <br />
                {errors.password?.type==="required" && <span className='text-red-500 -mt-3 pl-1'>Password is required</span>}
                {errors.password?.type==="maxLength" && <span className='text-red-500 -mt-3 pl-1'>Maximum 8 cherecter</span>}
                {errors.password?.type==="minLength" && <span className='text-red-500 -mt-3 pl-1'>Minimum 6 cherecter</span>}
                {errors.password?.type==="pattern" && <span className='text-red-500 -mt-3 pl-1'>Weak password</span>}
                
                <p onClick={()=>{setShow(!show)}}>{show ? <span>Show password</span> : <span>Hide password</span> }</p>
                <input {...register("cpassword", { required: true })}  className='outline-none border rounded-md my-3 p-2 w-full md:mx-auto' type={show ? 'password' : 'text'} name="cpassword" id="cpassword" placeholder='Confirm password'/> <br />
                
                <input {...register("photourl", { required: true })} className='outline-none border rounded-md my-3 p-2 w-full md:mx-auto' type="url" name="photourl" id="photourl" placeholder='Photo url' />
                {errors.photourl?.type === 'required' && <p className='text-red-600 -mt-3 pl-1'>Photo url is required</p>}
                
                <input disabled={watch('password') != watch('cpassword')} className='bg-blue-600 border border-blue-600 duration-700 text-white active:bg-blue-500 hover:bg-white hover:text-slate-800 cursor-pointer outline-none rounded-md my-3 w-full md:mx-auto py-2 font-semibold disabled:bg-red-600' type="submit" name="submit" value="Register" />


                <p>Already have an accounte ? <Link to='/login' className='text-blue-600 underline'>Login</Link></p>
                
                
            </form>
            <div className='px-8'>
                <GoogleLoginBtn>
                <FcGoogle className='inline mx-2 text-xl'></FcGoogle>  Register with Google 
                </GoogleLoginBtn>
                
            </div>

           
            
            
        </div>
    );
};

export default Register;