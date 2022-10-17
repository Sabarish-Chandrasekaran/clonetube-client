import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBe1xwPak4cqN9zcLdn1vYxtJ_5g7ryePQ",
  authDomain: "clonetube-41b33.firebaseapp.com",
  projectId: "clonetube-41b33",
  storageBucket: "clonetube-41b33.appspot.com",
  messagingSenderId: "244240408530",
  appId: "1:244240408530:web:fc9ed102aec4181de8f20b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
