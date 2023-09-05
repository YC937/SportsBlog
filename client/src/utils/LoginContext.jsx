import { createContext, useContext, useReducer } from "react";

// Import other reducer
import { reducer } from './reducers';

// Create login context using createContext()
export const LoginContext = createContext([{}, () => { }]);

// Create custom hook to use the login context
export const useLogin = () => useContext(LoginContext);

// Create LoginProvider component
export default function LoginProvider(props) {
    const loggedIn = props.loggedIn ? props.loggedIn : false;
    const user = props.user ? props.user : {};
    const token = props.token ? props.token : '';

    // Set up the reducer hook which accepts 2 arguments - the reducer and initial state
    const [state, dispatch] = useReducer(reducer, { user, loggedIn, token });

    return (
        <LoginContext.Provider value={[state, dispatch]} {...props} >
            {props.children}
        </LoginContext.Provider>
    );
}