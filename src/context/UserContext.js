import React, { useContext, useEffect, useReducer } from "react";
import userReducer from "../Reducers/userReducer";

const UserContext = React.createContext();

const getLocalStorage = () => {
    const auth = localStorage.getItem('isAuth')
    if (auth === true) {
        return true;
    }
    return false
}

const initialState = {
    isUserAuthenticated: getLocalStorage(),
    UserData: null,
    isLoading: false
}
export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    const authUser = (isAuth) => {
        dispatch({ type: "IS_USER_AUTH", payload: isAuth });
    }

    const authUserData = (data) => {
        dispatch({ type: "AUTH_USER_DATA", payload: data });
    }

    const setIsLoading = (boolean) => {
        dispatch({ type: "SET_IS_LOADING", payload: boolean })
    }

    useEffect(() => {
        localStorage.setItem('isAuth', state.isUserAuthenticated)
    }, [state.isUserAuthenticated])

    useEffect(() => {
        authUserData(state.UserData);
    }, [state.UserData])

    return (
        <UserContext.Provider
            value={
                {
                    ...state,
                    authUser,
                    authUserData,
                    setIsLoading
                }
            }
        >
            {children}
        </UserContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(UserContext)
}