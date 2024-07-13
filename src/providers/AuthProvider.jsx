import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import app from '../../firebase.config';
import axios from 'axios';

const gglProvider = new GoogleAuthProvider();

export const AuthContex = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)

    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const updateUser = (name, photoURL) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL })
    }

    const signInUser = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, gglProvider)
    }

    const logOut = () => {
        localStorage.removeItem('jwtAccessToken')
        localStorage.removeItem('User role')

        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(null)

            if (currentUser) {
                axios.get(`user/check?userEmail=${currentUser.email}`)
                    .then(response => {

                        setUser(response.data)

                        setLoader(null)

                    })
                    .catch(error =>{
                        console.log(error.message)
                        logOut()
                    })
            }
        })

        //stop observing after unmount
        return unsubscribe()
    }, [])

    // axios.get('/cookie').then(response =>console.log(response))
    // axios.get('/cookie-check').then(response =>console.log(response))


    const contextData = {
        user,
        setUser,
        loader,
        setLoader,
        createUser,
        updateUser,
        signInUser,
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