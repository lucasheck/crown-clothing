import { ChangeEvent, FormEvent, useState } from "react";
import { SignUpContainer } from "./sign-up-form.styles";
import { AuthError, AuthErrorCodes } from "firebase/auth";

import FormInput from "../form-input/form-input";
import Button from "../button/button";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const dispatch = useDispatch();

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("Password do not match!");
			return false;
		}
		if (password.length < 6) {
			alert("Password should be at least 6 characters!");
			return false;
		}

		try {
			dispatch(signUpStart(email, password, displayName));

			resetFormFields();
		} catch (error) {
			if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
				alert("Email already in use.");
			} else {
				console.log("Error creating the user: ", error);
			}
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignUpContainer>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					required
					type="text"
					name="displayName"
					onChange={handleChange}
					value={displayName}
				/>

				<FormInput
					label="Email"
					required
					type="email"
					name="email"
					onChange={handleChange}
					value={email}
				/>

				<FormInput
					label="Password"
					required
					type="password"
					name="password"
					onChange={handleChange}
					value={password}
				/>

				<FormInput
					label="Confirm Password"
					required
					type="password"
					name="confirmPassword"
					onChange={handleChange}
					value={confirmPassword}
				/>
				<Button type="submit">SIGN UP</Button>
			</form>
		</SignUpContainer>
	);
};

export default SignUpForm;
