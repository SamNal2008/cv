// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, UserCredential, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { addDoc, collection, doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { replacer } from "./functions";

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
export const firestore = getFirestore(app);
export const storage = getStorage(app);

export const signUpFunction = async (email: string, password: string) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    // set user in DB
    const user = userCredentials.user;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
}


// MISC

const defineAdminRole = async (user: any) => {
  try {
    const userParsed = JSON.stringify(user.toJSON(), replacer);
    let userObject = JSON.parse(userParsed);
    const docRef = doc(firestore, 'users', user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      userObject['isAdmin'] = (docSnap.data().isAdmin);
    } else {
      userObject['isAdmin'] = false;
    }
    await setDoc(doc(firestore, 'users', user.uid), userObject);
  }
  catch (e) {
    console.error(e);
  }
}

// Google authentification
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(res);
    let token = '';
    if (credential)
      token = credential.accessToken || '';
    const user = res.user;
    await defineAdminRole(user);
    return user;
  } catch (error: any) {
    console.error(error);
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential_1 = GoogleAuthProvider.credentialFromError(error);
    console.error(credential_1);
  }
}

// Github auth
const githubProvider = new GithubAuthProvider();
export const signInWithGitHub = async () => {
  try {
    const res = await signInWithPopup(auth, githubProvider);
    const credential = GithubAuthProvider.credentialFromResult(res);
    let token = '';
    if (credential)
      token = credential.accessToken || '';
    const user = res.user;
    defineAdminRole(user);
    return user;
  } catch (error: any) {
    console.error(error);
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential_1 = GithubAuthProvider.credentialFromError(error);
    console.error(credential_1);
  }
}

// Facebook auth
const facebookProvider = new FacebookAuthProvider();

export const signInWithFaceboook =  async () => {
  try {
    const res = await signInWithPopup(auth, facebookProvider);
    const credential = FacebookAuthProvider.credentialFromResult(res);
    let token = '';
    if (credential)
      token = credential.accessToken || '';
    const user = res.user;
    defineAdminRole(user);
    return user;
  } catch (error: any) {
    console.error(error);
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential_1 = FacebookAuthProvider.credentialFromError(error);
    console.error(credential_1);
  }
}

export const signOutFromApp = async () => {
  try {
    await signOut(auth);
    console.log('Signed out');
  } catch (err) {
    console.error(err);
  }
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