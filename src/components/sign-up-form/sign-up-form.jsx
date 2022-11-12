import { useState } from "react";
import "./sign-up-form.scss";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="signUpForm">
			<h3>I do not have a account</h3>
			<h4>Sign up with your email and password</h4>
			<form onSubmit={() => {}}>
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
			</form>
			<button type="submit">SIGN UP</button>
		</div>
	);
};

export default SignUpForm;
