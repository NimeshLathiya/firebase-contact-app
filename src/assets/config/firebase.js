// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAwIxXX7mvzf7Wnoom1pXkVjvpE_x3RKCI",
  authDomain: "app-contact-5f4e0.firebaseapp.com",
  projectId: "app-contact-5f4e0",
  storageBucket: "app-contact-5f4e0.appspot.com",
  messagingSenderId: "811065121994",
  appId: "1:811065121994:web:fd74b5a0375349fc38a833",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
