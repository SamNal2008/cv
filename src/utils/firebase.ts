// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, UserCredential, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { createContext, useContext } from "react";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signUpFunction = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password).then((userCredentials: UserCredential) => {
    // set user in DB
    const user = userCredentials.user;
    //...
  }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
  });
}

// Google authentification
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider).then(res => {
    const credential = GoogleAuthProvider.credentialFromResult(res);
    let token = '';
    if (credential)
      token = credential.accessToken || '';
    const user = res.user;
    console.log(user);
    // set token somewhere
    return user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
}

export const signOutFromApp = () => {
  return signOut(auth).then(() => {
    console.log('Signed out');
  }).catch((err) => {
    console.error(err);
  });
}

// const saignInWithGoogle = async () => {
//   try {
//     const res = await firebaseAuth.signInWithPopup(app, googleProvider);
//     const user = res.user;
//     const query = await storage
//       .collection(app, [])
//       .where("uid", "==", user.uid)
//       .get();
//     if (query.docs.length === 0) {
//       await db.collection("users").add({
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };