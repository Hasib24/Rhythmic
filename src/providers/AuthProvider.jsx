import React, { createContext } from 'react';


export const AuthContex = createContext(null)

const AuthProvider = ({ children }) => {

    const contextData ={
        user : true
    }

    return (
        <AuthContex.Provider value={contextData}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider; 