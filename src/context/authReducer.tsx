
export interface AuthState {
    status: 'cheking' | 'authenticated' | 'not-authenticated';
    token: string | null;
    errorMessage: string | null;
    isExitoso: boolean;
}

type AuthAction = 
    | {type: 'signIn', payload: {token: string, isExistoso: boolean}}
    | {type: 'addError', payload: string}
    | {type: 'removeError' }
    | {type: 'logout' }
    | {type: 'notAuthenticated'}

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'addError':
            return {
                ...state,
                status: "not-authenticated",
                token: null,
                errorMessage: action.payload,
            }

        case 'removeError':
            return {
                ...state,
                errorMessage: ''
            }
    
        case "signIn":
            return {
                ...state,
                errorMessage: '',
                status: "authenticated",
                token: action.payload.token,
                isExitoso: action.payload.isExistoso
            }
        case "logout":
            return {
                ...state,
                status: "not-authenticated",
                token: null,
                isExitoso: false
            }
        case "notAuthenticated":
            return {
                ...state,
                status: 'not-authenticated',
                token: null
            }
        default:
            return state;
    }
}