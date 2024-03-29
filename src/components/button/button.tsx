import { FC, ButtonHTMLAttributes } from "react";

import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
} from "./button.styles";

export enum BUTTON_TYPE_CLASSES {
	base = "base",
	google = "google-sign-in",
	inverted = "inverted",
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
	({
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
		[BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
	}[buttonType]);

export type ButtonProps = {
	children: React.ReactNode;
	buttonType?: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
	const CustomButton = getButton(buttonType);
	/* prettier-ignore */
	return (
		<CustomButton {...otherProps}> {children}
			</CustomButton>
	);
};

export default Button;
