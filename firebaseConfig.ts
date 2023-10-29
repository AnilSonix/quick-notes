// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { AppConfig } from "./appConfig";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: AppConfig.apiKey,
  authDomain: AppConfig.authDomain,
  projectId: AppConfig.projectId,
  storageBucket: AppConfig.storageBucket,
  messagingSenderId: AppConfig.messagingSenderId,
  appId: AppConfig.appId,
  measurementId: AppConfig.measurementId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
