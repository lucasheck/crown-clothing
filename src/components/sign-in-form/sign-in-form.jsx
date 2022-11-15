import {
	auth,
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import { useState } from "react";
import "./sign-in-form.scss";

const defaultFormFieldsSignIn = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	/*prettier-ignore*/
	const [formFieldsSignIn, setFormFieldsSignIn] = useState(defaultFormFieldsSignIn);
	const { email, password } = formFieldsSignIn;

	const resetFormFieldsSignIn = () => {
		setFormFieldsSignIn(defaultFormFieldsSignIn);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!(email && password)) {
			alert("Email and Password are required!");
			return false;
		}

		//TODO - LOG IN WITH THE USER AND PASSWORD - CHANGE THE CREATE USER METHOD TO LOG IN METHOD
		try {
			/*prettier-ignore*/
			// const { user } = await createAuthUserWithEmailAndPassword(email, password);
			// createUserDocumentFromAuth(user, { displayName });
			resetFormFieldsSignIn();
		} catch (error) {
			console.log("Error creating the user: ", error);
		}
	};

	const handleChangeSignIn = (event) => {
		const { name, value } = event.target;

		setFormFieldsSignIn({ ...formFieldsSignIn, [name]: value });
	};

	return (
		<div className="sign-in-container">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					type="email"
					name="email"
					onChange={handleChangeSignIn}
					value={email}
				/>

				<FormInput
					label="Password"
					type="password"
					name="password"
					value={password}
					onChange={handleChangeSignIn}
				/>

				<Button type="submit" buttonType="inverted">
					SIGN IN
				</Button>
			</form>
			<Button buttonType="google" onClick={logGoogleUser}>
				SIGN IN WITH GOOGLE
			</Button>
		</div>
	);
};

export default SignInForm;
