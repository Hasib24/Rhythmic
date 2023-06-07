import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import GoogleLoginBtn from '../../components/buttons/GoogleLoginBtn';

const Register = () => {

    let [show, setShow] = useState(false);

    
    const handleOnSubmit = (e) =>{

    }


    return (
        <div className='p-8 my-10 max-w-md mx-auto justify-center border rounded-md shadow-lg'>

            <form className='p-8' onSubmit={handleOnSubmit}>
                
                <input className='outline-none border rounded-md my-3 p-2 w-full md:mx-auto' type="name" name="name" id="name" placeholder='Enter name' required /> <br />
                <input className='outline-none border rounded-md my-3 p-2 w-full md:mx-auto' type="email" name="email" id="email" placeholder='Enter email' required /> <br />
                <input className='outline-none border rounded-md my-3 p-2 w-full md:mx-auto' type={show ? 'password' : 'text'} name="password" id="password" placeholder='Password' required /> <br />
                <p onClick={()=>{setShow(!show)}}>{show ? <span>show password</span> : <span>hide password</span> }</p>
                <input className='outline-none border rounded-md my-3 p-2 w-full md:mx-auto' type="url" name="url" id="url" placeholder='Photo url' />
                <input className='bg-blue-600 border border-blue-600 duration-700 text-white active:bg-blue-500 hover:bg-white hover:text-slate-800 cursor-pointer outline-none rounded-md my-3 w-full md:mx-auto py-2 font-semibold disabled:bg-slate-200' type="submit" name="submit" id="submit" value="Register" />


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