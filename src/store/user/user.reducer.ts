import { AnyAction } from "redux";
import { USER_ACTION_TYPES } from "./user.types";

import {
	signInFailed,
	signUpFailed,
	signOutFailed,
	signOutSuccess,
	signInSuccess,
} from "./user.action";
import { UserData } from "../../utils/firebase/firebase";

export type UserState = {
	readonly currentUser: null | UserData;
	readonly isLoading: boolean;
	readonly error: null | Error;
};

const INITIAL_STATE: UserState = {
	currentUser: null,
	isLoading: false,
	error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
	if (signInSuccess.match(action)) {
		return {
			...state,
			currentUser: action.payload,
		};
	}

	if (signOutSuccess.match(action)) {
		return {
			...state,
			currentUser: null,
		};
	}

	if (
		signOutFailed.match(action) ||
		signUpFailed.match(action) ||
		signInFailed.match(action)
	) {
		return {
			...state,
			error: action.payload,
		};
	}

	return state;
};
