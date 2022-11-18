import SignUpForm from "../../components/sign-up-form/sign-up-form";
import "./authentication.scss";
import SignInForm from "../../components/sign-in-form/sign-in-form";

const Authentication = () => {
	return (
		<div className="authentication-container">
			<SignInForm />

			<SignUpForm />
		</div>
	);
};

export default Authentication;
