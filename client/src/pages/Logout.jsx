import Auth from "../utils/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../utils/LoginContext";
import { LOGOUT } from "../utils/actions";

export default function Logout() {
    const [state, dispatch] = useLogin();
    const navigate = useNavigate();
    useEffect(() => {
        Auth.logout();
        dispatch({
            type: "logout"
        });
        navigate("/");
    }, []);

    return (
        <>
            Logout
        </>
    )
}