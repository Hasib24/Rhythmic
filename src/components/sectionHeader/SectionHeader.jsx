import React, { useContext } from 'react';
import { AuthContex } from '../../providers/AuthProvider';

const SectionHeader = ({children}) => {
    const { theme, setTheme } = useContext(AuthContex)

    return (
        <div className={`text-center text-4xl font-semibold my-10 ${theme =='dark'? 'text-slate-400':'text-slate-300'}`}>
            {children}
        </div>
    );
};

export default SectionHeader;