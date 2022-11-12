import {
	auth,
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import "./sign-in.scss";

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
		// console.log(response.user.uid);
	};
	return (
		<div className="sign-in">
			<div className="sign-in-container-div">
				<h3>I already have an account</h3>
				<h4>Sign in with your email and password</h4>
				<h5>Email</h5>
				<input
					className="email"
					type="text"
					id="name"
					placeholder="Email"
				/>
				<h5>Password</h5>
				<input
					className="name"
					type="password"
					id="pw"
					placeholder="Password"
				/>
				<br />

				<div className="teste">
					<button id="btn-sign-in">SIGN IN</button>
					<button
						id="btn-sign-in-with-google"
						onClick={logGoogleUser}
					>
						SIGN IN WITH GOOGLE
					</button>
				</div>
			</div>
			<div className="sign-in-container-div">
				<SignUpForm />
			</div>
		</div>
	);
};

export default SignIn;
