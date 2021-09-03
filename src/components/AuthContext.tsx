import { User, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { createContext, useEffect, useState, useContext } from "react";
import { auth, firestore } from "../utils/firebase";

export const AuthContext = createContext({
    user: {
        displayName: '',
        email: '',
        phoneNumber: '',
        photoUrl: '',
        providerId: '',
        uid: '',
        isAdmin: false,
    },
    error: '',
});
  
export const useAuthState = () => {
  const auth = useContext(AuthContext);
  return {...auth, isAuthenticated: auth.user != null, isAdmin: auth.user?.isAdmin}
}



export const AuthContextProvider = (props: any): JSX.Element => {
    const [user, setUser] = useState<any>();
    const [error, setError] = useState();
    const setStateWithAdmin = async (u: any) => {
      try {
        if (u) {
          const docRef = doc(firestore, 'users', u.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            u.isAdmin = docSnap.data().isAdmin;
          }
        }
      }
      catch (e) {
        console.error(e);
      }
      return setUser(u);
    }
  
    useEffect(() => {
      // @ts-ignore
      const unsubscribe = onAuthStateChanged(auth, setStateWithAdmin, setError);
      return () => unsubscribe();
    }, []);
    
    return <AuthContext.Provider value={{user, error}} {...props}/>
}