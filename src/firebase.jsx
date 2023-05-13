import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSmNrbYlTIhNE2gKG2xbCw7AqKXOEMyFU",
  authDomain: "stark-ai-4178f.firebaseapp.com",
  projectId: "stark-ai-4178f",
  storageBucket: "stark-ai-4178f.appspot.com",
  messagingSenderId: "488590362761",
  appId: "1:488590362761:web:c950ef3b6efca59d135e58",
  measurementId: "G-FMNFTX4VJF",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);

// Configure Google provider
const googleProvider = new GoogleAuthProvider();

// Configure Facebook provider
const facebookProvider = new FacebookAuthProvider();

export { googleProvider, facebookProvider }; 