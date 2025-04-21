import { LOG_OUT, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

const initialState = {
    loading: false,
    user: JSON.parse(localStorage.getItem("username")) || null,
    error: "",
    isLog: false
}
function reducer(state=initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem("username", JSON.stringify(action.payload))
            return {
                ...state,
                loading: false,
                user: action.payload,
                isLog: true
            }
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload,
                isLog: false
            }
        case LOG_OUT:
            return {
                ...state,
                loading: false,
                user: null,
                error: null,
                isLog: false
            }
    }
}
export default reducer