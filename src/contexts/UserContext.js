import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase'; // Import Firebase authentication
import {  signOut } from "firebase/auth";

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}

// we should probably move the login logic from Login.js to here as well
export function logout() {               
  signOut(auth).then(() => {
      console.log("Signed out successfully")
  }).catch((error) => {
    // An error happened.
    console.log(error);
  });
}

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          // User is signed in
          setUser(authUser);
          console.log('User signed in in UserContext', authUser);
        } else {
          // User is signed out
          setUser(null);
        }
      });
  
      // Cleanup the listener on unmount
      return unsubscribe;
    }, []);
  
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
  }