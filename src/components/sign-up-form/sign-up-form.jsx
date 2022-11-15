import { useState } from "react";
import "./sign-up-form.scss";

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button from "../button/button";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
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
			/*prettier-ignore*/
			const { user } = await createAuthUserWithEmailAndPassword(email, password);
			createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Email already in use.");
			} else {
				console.log("Error creating the user: ", error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="sign-up-container">
			<h2>Don't have a account?</h2>
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
		</div>
	);
};

export default SignUpForm;
