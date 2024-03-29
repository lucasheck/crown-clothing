import { useState, FormEvent, ChangeEvent } from "react";

import FormInput from "../form-input/form-input";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";

import { SignInButtonContainer, SignInContainer } from "./sign-in-form.styles";
import { useDispatch } from "react-redux";
import {
	googleSignInStart,
	emailSignInStart,
} from "../../store/user/user.action";
import { AuthError, AuthErrorCodes } from "firebase/auth";

const defaultFormFieldsSignIn = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const dispatch = useDispatch();
	/*prettier-ignore*/
	const [formFieldsSignIn, setFormFieldsSignIn] = useState(defaultFormFieldsSignIn);
	const { email, password } = formFieldsSignIn;

	const resetFormFieldsSignIn = () => {
		setFormFieldsSignIn(defaultFormFieldsSignIn);
	};

	const signInWithGoogle = async () => {
		dispatch(googleSignInStart());
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			dispatch(emailSignInStart(email, password));
			resetFormFieldsSignIn();
		} catch (error) {
			if (
				(error as AuthError).code === AuthErrorCodes.USER_DELETED ||
				(error as AuthError).code === AuthErrorCodes.INVALID_PASSWORD
			)
				alert("The username or password is incorrect.");
			else console.log("Error trying to sign in: ", error);
		}
	};

	const handleChangeSignIn = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormFieldsSignIn({ ...formFieldsSignIn, [name]: value });
	};

	return (
		<SignInContainer>
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

				<SignInButtonContainer>
					<Button
						type="submit"
						buttonType={BUTTON_TYPE_CLASSES.inverted}
					>
						SIGN IN
					</Button>
					<Button
						buttonType={BUTTON_TYPE_CLASSES.google}
						type="button"
						onClick={signInWithGoogle}
					>
						GOOGLE SIGN IN
					</Button>
				</SignInButtonContainer>
			</form>
		</SignInContainer>
	);
};

export default SignInForm;
