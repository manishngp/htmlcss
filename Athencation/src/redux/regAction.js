import axios from "axios"
import { REG_ERROR, REG_REQUEST, REG_SUCCESS } from "./regActionType"

const regLoading = () => {
    return {
        type: REG_REQUEST
    }
}

const regSuccess = (user) => {
    return {
        type: REG_SUCCESS,
        payload: user
    }
}
const regError = (error) => {
    return {
        type: REG_ERROR,
        payload: error
    }
}

const regUser = (data) => {
    return async (dispatch) => {
        dispatch(regLoading())
        try {
            let responceData = await axios.get("https://authentication-4ae3d-default-rtdb.firebaseio.com/user.json")
            let resData = responceData.data
            const userReg = Object.values(resData).find((item) => item.email == data.email)
            if (userReg) {
                alert("User Already Exist")
                return
            }
            const resP = await axios.post("https://authentication-4ae3d-default-rtdb.firebaseio.com/user.json")
            const responceReg = resP.data
            dispatch(regSuccess(responceReg))

        } catch (error) {
            dispatch(regError(error))
        }
    }
}
export default regUser