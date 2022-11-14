import { useState } from "react";
import "./sign-up-form.scss";

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

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
		<div className="signUpForm">
			<h3>I do not have a account</h3>
			<h4>Sign up with your email and password</h4>
			<form onSubmit={handleSubmit}>
				<label>Display Name</label>
				<input
					required
					type="text"
					name="displayName"
					onChange={handleChange}
				/>

				<label>Email</label>
				<input
					required
					type="email"
					name="email"
					onChange={handleChange}
				/>

				<label>Password</label>
				<input
					required
					type="password"
					name="password"
					onChange={handleChange}
				/>

				<label>Confirm Password</label>
				<input
					required
					type="password"
					name="confirmPassword"
					onChange={handleChange}
				/>
				<button type="submit">SIGN UP</button>
			</form>
		</div>
	);
};

export default SignUpForm;
