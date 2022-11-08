import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDNhLP95xn560jl1VXMMb75Otx9MlLaWiw",
	authDomain: "crown-clothing-db-a56da.firebaseapp.com",
	projectId: "crown-clothing-db-a56da",
	storageBucket: "crown-clothing-db-a56da.appspot.com",
	messagingSenderId: "672159450411",
	appId: "1:672159450411:web:408ac91cc6f22c35feb16e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);