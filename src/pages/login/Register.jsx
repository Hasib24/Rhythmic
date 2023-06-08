import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import GoogleLoginBtn from '../../components/buttons/GoogleLoginBtn';
import { useForm } from "react-hook-form";

const Register = () => {
    const passRef = useRef()
    const cPassRef = useRef()
    const [show, setShow] = useState(null);
    const [ passMatched, setPassMatched ] = useState(null);
    const [regDisable, setRegDisable] = useState(null)


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(errors);

    const handlePassMatched = () =>{
       
        const pass = passRef.current.value;
        const cPass = cPassRef.current.value;
        console.log(cPass);
        console.log(pass);
        if(pass == cPass){
            setPassMatched(false)
            setRegDisable(null)
            console.log(`pass matched`);

        }else{
            setPassMatched(true)
            setRegDisable(true)
            console.log(`pass not matched`);
        }
    }
    


    return (
        <div className='p-8 my-10 max-w-md mx-auto justify-center border rounded-md shadow-lg'>

            <form className='p-8' onSubmit={handleSubmit(onSubmit)}>
                
                <input {...register("name", { required: true })} className='outline-none border rounded-md my-3 p-2 w-full md:mx-auto' type="name" name="name" id="name" placeholder='Enter name'/> <br />
                {errors.name?.type === 'required' && <p className='text-red-600 -mt-3 pl-1'>Your name is required</p>}
                
                <input {...register("email", { required: true })}  className='outline-none border rounded-md my-3 p-2 w-full md:mx-auto' type="email" name="email" id="email" placeholder='Enter email' /> <br />
                {errors.email?.type === 'required' && <p className='text-red-600 -mt-3 pl-1'>Your email is required</p>}
                
                <input {...register("password", { required: true, minLength :6, maxLength: 8, pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].)(?=.*[a-z])/ })}  className='outline-none border rounded-md my-3 p-2 w-full md:mx-auto' type={show ? 'password' : 'text'} ref={passRef} name="password" id="password" placeholder='Password'/> <br />
                {errors.password?.type==="required" && <span className='text-red-500 -mt-3 pl-1'>Password is required</span>}
                {errors.password?.type==="maxLength" && <span className='text-red-500 -mt-3 pl-1'>Maximum 8 cherecter</span>}
                {errors.password?.type==="minLength" && <span className='text-red-500 -mt-3 pl-1'>Minimum 6 cherecter</span>}
                {errors.password?.type==="pattern" && <span className='text-red-500 -mt-3 pl-1'>Weak password</span>}
                
                <p onClick={()=>{setShow(!show)}}>{show ? <span>Show password</span> : <span>Hide password</span> }</p>
                <input {...register("cpassword", { required: true })} ref={cPassRef} onChange={handlePassMatched} className='outline-none border rounded-md my-3 p-2 w-full md:mx-auto' type={show ? 'password' : 'text'} name="cpassword" id="cpassword" placeholder='Confirm password'/> <br />
                {passMatched ? <p className='text-red-600 -mt-3 pl-1'>Password matched</p>: <></>}
                
                <input {...register("photourl", { required: true })} className='outline-none border rounded-md my-3 p-2 w-full md:mx-auto' type="url" name="photourl" id="photourl" placeholder='Photo url' />
                {errors.photourl?.type === 'required' && <p className='text-red-600 -mt-3 pl-1'>Photo url is required</p>}
                
                <input disabled={regDisable} className='bg-blue-600 border border-blue-600 duration-700 text-white active:bg-blue-500 hover:bg-white hover:text-slate-800 cursor-pointer outline-none rounded-md my-3 w-full md:mx-auto py-2 font-semibold disabled:bg-red-600' type="submit" name="submit" value="Register" />


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