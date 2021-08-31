import { User, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState, useContext } from "react";
import { auth } from "./firebase";

export const AuthContext = createContext({
    user: {
        displayName: '',
        email: '',
        phoneNumber: '',
        photoUrl: '',
        providerId: '',
        uid: '',
    },
    error: ''
});
  
  export const useAuthState = () => {
    const auth = useContext(AuthContext);
    return {...auth, isAuthenticated: auth.user != null}
  }

export const AuthContextProvider = (props: any): JSX.Element => {
    const [user, setUser] = useState<User>();
    const [error, setError] = useState();
  
    useEffect(() => {
      // @ts-ignore
      const unsubscribe = onAuthStateChanged(auth, setUser, setError)
      return () => unsubscribe();
    }, []);
    
    return <AuthContext.Provider value={{user, error}} {...props}/>
}