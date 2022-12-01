import { useState } from "react";

import {
	signInWithGooglePopup,
	signInEmailAndPassword,
} from "../../utils/firebase/firebase";

import FormInput from "../form-input/form-input";
import Button from "../button/button";

import "./sign-in-form.scss";

const defaultFormFieldsSignIn = {
	email: "",
	password: "",
};

const SignInForm = () => {
	/*prettier-ignore*/
	const [formFieldsSignIn, setFormFieldsSignIn] = useState(defaultFormFieldsSignIn);
	const { email, password } = formFieldsSignIn;

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
	};

	const resetFormFieldsSignIn = () => {
		setFormFieldsSignIn(defaultFormFieldsSignIn);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await signInEmailAndPassword(email, password);
			resetFormFieldsSignIn();
		} catch (error) {
			if (
				error.code === "auth/user-not-found" ||
				error.code === "auth/wrong-password"
			)
				alert("The username or password is incorrect.");
			else console.log("Error trying to sign in: ", error);
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
					required
					onChange={handleChangeSignIn}
					value={email}
				/>

				<FormInput
					label="Password"
					type="password"
					name="password"
					required
					value={password}
					onChange={handleChangeSignIn}
				/>

				<div className="sign-in-button-container">
					<Button type="submit" buttonType="inverted">
						SIGN IN
					</Button>
					<Button
						type="button"
						buttonType="google"
						onClick={signInWithGoogle}
					>
						GOOGLE SIGN IN
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
