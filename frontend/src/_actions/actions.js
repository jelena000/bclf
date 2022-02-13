import {constants} from '../_constants/constants';

export function success(user) { 
	return { type: constants.REGISTRATION_SUCCESS, username : user };
}

export function failure() { 
	return { type: constants.REGISTRATION_FAILURE} ;
}

export function logout() { 
	return { type: constants.LOGOUT} ;
}
