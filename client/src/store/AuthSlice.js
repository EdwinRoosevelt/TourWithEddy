import {createSlice} from "@reduxjs/toolkit";

const jwtToken = localStorage.getItem('jwtToken');
const isToken = (jwtToken) ? true : false; 

const initialState = {
  isLoggedIn: isToken,
  loginAlerts: {
    isLoading: false,
    isEmailValid: true,
    isPasswordValid: true,
    isLoggedIn: null,
  },
};

const AuthSlice = createSlice({
    name: "Authentication Slice",
    initialState,
    reducers: {
        login(state, {payload}) {
            state.isLoggedIn = true;
            localStorage.setItem('jwtToken', payload);
        },
        logout(state) {
            state.isLoggedIn = false;
            localStorage.removeItem('jetToken');
        },
        setLoginAlert(state, {payload}) {
            const {type, condition} = payload;
            state.loginAlerts = {
              ...state.loginAlerts,
              [payload.type]: payload.condition,
            };
            // state.loginAlerts.type = condition
        }
    }
});

export default AuthSlice;
// Export is must before using the action objects
export const { login, logout, setLoginAlert } = AuthSlice.actions;

export const asyncLogin = ({email, password}) => async (dispatch) => {
    try {
        dispatch(setLoginAlert({ type: "isLoading", condition: true }));
        dispatch(setLoginAlert({ type: "isEmailValid", condition: true }));
        dispatch(setLoginAlert({ type: "isPasswordValid", condition: true }));
        

        const url = "http://localhost:5000/api/users/login",
        reqOptions = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password})
        }
        
        const res = await fetch(url, reqOptions)
        const resData = await res.json()
        console.log(resData)
        if (res.ok) {
            dispatch(login(resData.jwtToken));
            console.log("done")
        }
        else {
            throw new Error(resData.message);
        }
        
        
    }
    catch (err) {

        if (err.message == "Invalid Email") dispatch(setLoginAlert({ type: "isEmailValid", condition: false }));
        if (err.message == "Invalid Password") dispatch(setLoginAlert({ type: "isPasswordValid", condition: false }));

    }
    dispatch(setLoginAlert({ type: "isLoading", condition: false }));
};
