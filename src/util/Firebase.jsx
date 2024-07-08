import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getDatabase, set, get, ref, child } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDlMfSjSAF3-XUg8rjI6JEy_RNt5l5ywLk",
  authDomain: "music-pla-37f19.firebaseapp.com",
  projectId: "music-pla-37f19",
  storageBucket: "music-pla-37f19.appspot.com",
  messagingSenderId: "857797052907",
  appId: "1:857797052907:web:f6c052d38ec9b1966771ae",
  measurementId: "G-RNVJX3E5MR",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const provider = new GoogleAuthProvider();

const auth = getAuth(app);
auth.useDeviceLanguage();

const putData = (path, data) => {
  return set(ref(db, path), data);
};

const getData = (path) => {
  return get(child(ref(db, path), "/"));
};

const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const loginWithGoogle = () => {
  return signInWithPopup(auth, provider)
    .then((data) => GoogleAuthProvider.credentialFromResult(data))
    .catch((error) => error);
};

const FirebaseContext = createContext(null);

export const GetFirebase = () => useContext(FirebaseContext);

export const sign_out = () => {
  return signOut(auth);
};

export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider
      value={{
        putData,
        logIn,
        signUp,
        loginWithGoogle,
        auth,
        sign_out,
        getData,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
