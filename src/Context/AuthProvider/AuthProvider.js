import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../Firebase/firebase.config';

export const AuthContext=createContext();
    const auth=getAuth(app);


const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        
            setUser(currentUser);
            setLoading(false);
        });
        return()=>{
             return unsubscribe();
        }
    },[]);

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
        
    }

    const loginWithGoogle=(GoogleAuthProvider)=>{
        setLoading(true);
        return signInWithPopup(auth,GoogleAuthProvider);
    }

    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile);
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    const authInfo={
        user,
        loading,
       createUser,
       signIn,
       logOut,
       loginWithGoogle,
       updateUserProfile

    }
    
    

    return (
        
            <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        
    );
};

export default AuthProvider;