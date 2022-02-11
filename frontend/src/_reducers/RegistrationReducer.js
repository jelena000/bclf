import { constants } from '../_constants/constants';

const initialState = { loggedIn: false, user : ''};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.REGISTRATION_REQUEST:
            return {loggedIn: false, user: action.user};
        case constants.REGISTRATION_SUCCESS:
            return {loggedIn: true, user: action.user};
        case constants.REGISTRATION_FAILURE:
            return {loggedIn: false, user : ''};
        default:
            return state;
    }
}