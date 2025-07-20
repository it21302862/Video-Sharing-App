import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "nasawebapp.firebaseapp.com",
  projectId: "nasawebapp",
  storageBucket: "nasawebapp.appspot.com",
  messagingSenderId: "655671778958",
  appId: "1:655671778958:web:05c213fb82782c5d9af3df"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;