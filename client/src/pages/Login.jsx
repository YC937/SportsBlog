import LoginForm from "../components/LoginForm";
import LoginCheck from "../components/LoginCheck";

export default function Login(props) {
    return (
        <>
            <LoginCheck />
            <h1> Login </h1>
            <LoginForm />
        </>
    )
}