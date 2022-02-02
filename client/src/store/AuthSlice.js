import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    loginAlerts: {
        isLoading: false,
        isEmailValid: null,
        isPasswordValid: null,
        isLoggedIn: null
    }
}

const AuthSlice = createSlice({
    name: "Authentication Slice",
    initialState,
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
        setLoginAlert(state, {payload}) {
            console.log(payload);
            state.loginAlerts = {...state.loginAlerts, payload};
        }
    }
});

export default AuthSlice;
// Export is must before using the action objects
export const { login, logout, setLoginAlert } = AuthSlice.actions;

export const asyncLogin = ({email, password}) => async (dispatch) => {
    try {
        dispatch(setLoginAlert({ isLoading: true }));

        const url = "http://localhost:5000/api/users/login",
        reqOptions = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password})
        }
        
        const res = await fetch(url, reqOptions)
        const resData = await res.json()
        console.log(resData)
        dispatch(setLoginAlert({ isLoading: false }));
    }
    catch (err) {
        console.log(err.message)
    }
    // dispatch(login());
};
