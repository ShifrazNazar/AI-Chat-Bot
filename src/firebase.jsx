import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

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

export const auth = getAuth(app);
