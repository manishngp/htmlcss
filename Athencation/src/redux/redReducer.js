import { REG_ERROR, REG_REQUEST, REG_SUCCESS } from "./regActionType"

const initialState = {
    loading: false,
    user: JSON.parse(localStorage.getItem("username")) || null,
    error: "",
    isLog: false
}
function regReducer(state=initialState, action) {
    switch (action.type) {
        case REG_REQUEST:
            return {
                ...state,
                loading: true
            }
        case REG_SUCCESS:
            localStorage.setItem("username", JSON.stringify(action.payload))
            return {
                ...state,
                loading: false,
                user: action.payload,
                isLog: true
            }
        case REG_ERROR:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload,
                isLog: false
            }
    }
}
export default regReducer