import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

const GoogleLoginBtn = ({children}) => {

    const location = useLocation()



    const handleClick = () =>{
 
        
    }
    return (
        <button onClick={handleClick} className=' border border-blue-600 duration-700  active:bg-blue-500  cursor-pointer outline-none rounded-md my-3 w-full md:mx-auto py-2 font-semibold disabled:bg-slate-200'>{children}</button>
    );
};

export default GoogleLoginBtn;