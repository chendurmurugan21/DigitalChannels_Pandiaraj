import { USER_NAME } from '../constants';

export const changeUserName = (userName) => {
    return {
        type: USER_NAME,
        payload: userName
    }
}