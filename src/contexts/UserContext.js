import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase'; // Import Firebase authentication

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
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