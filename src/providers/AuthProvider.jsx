import React, { createContext, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

import app from '../../firebase.config';

const gglProvider = new GoogleAuthProvider();

export const AuthContex = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [ loader, setLoader ] = useState(null)
    

    const googleSignIn = () =>{
        return signInWithPopup(auth, gglProvider)
    }

    const logOut = () =>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoader(null)
        })

        //stop observing after unmount
        return unsubscribe()
    },[])


    const contextData ={
        user,
        setUser,
        loader,
        setLoader,
        googleSignIn,
        logOut
    }

    return (
        <AuthContex.Provider value={contextData}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider; 