// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, UserCredential, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, setDoc } from 'firebase/firestore';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { replacer, str2ab } from "./functions";
import { Project } from "./project";
import Study from "./study";

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
    console.log(e);
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
    console.log(error);
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential_1 = GoogleAuthProvider.credentialFromError(error);
    console.log(credential_1);
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
    console.log(error);
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential_1 = GithubAuthProvider.credentialFromError(error);
    console.log(credential_1);
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
    console.log(error);
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential_1 = FacebookAuthProvider.credentialFromError(error);
    console.log(credential_1);
  }
}

export const signOutFromApp = async () => {
  try {
    await signOut(auth);
    console.log('Signed out');
  } catch (err) {
    console.log(err);
  }
}

// DB

export const save = async (type: string, obj: any) => {
  try {
    await setDoc(doc(firestore, type, obj.id), obj);
  }
  catch (e) {
    console.log(e);
    throw e;
  }
}

export const getOne = async (type: string, id: string) => {
  const docRef = doc(firestore, type, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let data: any = docSnap.data();
      return data;
    }
    else {
      console.log('Object not found');
    }
}

export const get = async (type: string) => {
  try {
    const q = query(collection(firestore, type));
    const querySnapshots = await getDocs(q);
    let tmp: any[] = [];
    querySnapshots.forEach((project: any) => {
      console.log(project.data());
      tmp.push(project.data());
    });
    return tmp;
  }
  catch (e) {
    console.log(e);
    throw e;
  }
}

export const deleteObj = async (type: string, obj: any) => {
  await deleteDoc(doc(firestore, type, obj.id));
}


// STORAGE

export async function fetchImage(url: string) {
  try {
    const url_1 = await getDownloadURL(ref(storage, url));
    // `url` is the download URL for 'images/stars.jpg'
    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url_1);
    xhr.send();
    return url_1;
  } catch (error) { console.log(error); return ''; } 
}

export const uploadImageFor = async (type: string, name: string, img: any) => {
  try {
    const storageRef = ref(storage, `${type}/${name}`);
    return await uploadBytes(storageRef, img).then((snapshot: any) => {
      console.log('Image uploaded');
      return snapshot;
    });
  }
  catch (e) {
    console.log(e);
  }
}

export const uploadProjectContent = async (type: string, name: string, content: string, ressource: any) => {
  try {
    const arrayBuffer = str2ab(content)
    const storageRef = ref(storage, `${type}/${name}`);
    return await uploadBytes(storageRef, arrayBuffer).then((snapshot: any) => {
      console.log('file uploaded');
      return snapshot;
    });
  }
  catch (e) {
    console.log(e);
  }
}

export async function fetchProjectContent(url: string) {
  try {
    const url_1 = await getDownloadURL(ref(storage, url));
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'arraybuffer';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url_1);
    xhr.send();
    return url_1;
  } catch (error) { console.log(error); return ''; } 
}

export const deleteImage = (imgPath: string) => {
  // Create a reference to the file to delete
  const imgRef = ref(storage, imgPath);

  // Delete the file
  deleteObject(imgRef).then(() => {
    // File deleted successfully
    console.log('image deleted');
  }).catch((error) => {
    // Uh-oh, an error occurred!
    console.log(error);
  });
}



