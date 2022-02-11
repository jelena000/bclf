import {userConstants} from '../_constants/user-constants';

export function success(user) { 
	return { type: userConstants.REGISTRATION_SUCCESS, username : user };
}

export function failure() { 
	return { type: userConstants.REGISTRATION_FAILURE} ;
}

export function logout() { 
	return { type: userConstants.LOGOUT} ;
}
