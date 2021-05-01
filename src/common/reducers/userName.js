import { USER_NAME } from '../constants';


const initialState = {
    userName: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_NAME:
            return {
                ...state,
                userName: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;