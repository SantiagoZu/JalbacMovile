import React, { createContext, useReducer, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthState, authReducer } from "./authReducer";
import jalbacApi from "../../api/jalbacApi";
import { LoginData, LoginResponse } from "../../interfaces/interfaces";

type AuthContextProps = {
    errorMessage: string | null;
    token: string | null;
    isExitoso: boolean;
    status: 'cheking' | 'authenticated' | 'not-authenticated';
    signIn: (loginData: LoginData) => void;
    logOut: () => void;
    removeError: () => void;

}

const authInitialState: AuthState = {
    status: 'cheking',
    token: null,
    isExitoso: false,
    errorMessage: null
}


export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, authInitialState)
    useEffect(() => {
        checkToken()
    }, [])
    
    const checkToken = async() => {
        const token = await AsyncStorage.getItem('token');
        //No token, no autenticado
        if (!token) return dispatch({type: "notAuthenticated"});
        if (token) return dispatch({
            type: "signIn",
            payload: {
                isExistoso: true,
                token
            }
        })
    }

    const signIn = async ({ correo, contrasena }: LoginData) => {
        try {
            const resp = await jalbacApi.post<LoginResponse>('/Usuario/login', { correo, contrasena })
            dispatch(
                {
                    type: 'signIn',
                    payload: {
                        isExistoso: resp.data.resultado.isExitoso,
                        token: resp.data.resultado.token
                    }
                });

                await AsyncStorage.setItem('token', resp.data.resultado.token)
        } catch (error: any) {

            dispatch({ type: "addError", payload: error.response.data.errorMessages[0] || "Información incorrecta" });

        }
    }
    const logOut = async() => {
        await AsyncStorage.removeItem('token');
        dispatch({type: 'logout'})
    };
    const removeError = () => {
        dispatch({type: 'removeError'})
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            signIn,
            logOut,
            removeError,
        }}>
            {children}
        </AuthContext.Provider>
    )
}