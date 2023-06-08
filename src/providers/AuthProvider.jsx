import React, { createContext, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import app from '../../firebase.config';



const gglProvider = new GoogleAuthProvider();


export const AuthContex = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    

    const googleSignIn = () =>{
        return signInWithPopup(auth, gglProvider)
    }


    const contextData ={
        user,
        setUser,
        googleSignIn
    }

    return (
        <AuthContex.Provider value={contextData}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider; 