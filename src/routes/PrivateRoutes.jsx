import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContex } from '../providers/AuthProvider';


const PrivateRoutes = ({ children }) => {
    const {user, loader} = useContext(AuthContex)
    if(loader){
        return <div className='h-[100vh] w-full flex justify-center items-center'><span className="loading loading-dots loading-lg"></span></div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;