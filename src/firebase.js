import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBikj95kEbFDDRdcNpdKaz9_7o46cfoVMc",
  authDomain: "slack-clone-7cfb4.firebaseapp.com",
  projectId: "slack-clone-7cfb4",
  storageBucket: "slack-clone-7cfb4.appspot.com",
  messagingSenderId: "999052359536",
  appId: "1:999052359536:web:1716509076e9d5ba6641b5",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
