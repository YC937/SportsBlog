import SignupForm from '../components/SignupForm';
import LoginCheck from '../components/LoginCheck';

export default function Signup(props) {
    return (
        <>
        <LoginCheck />
        <div className='signup-page'>
            <h1>Signup</h1>
            <SignupForm />
        </div>
        </>
    )
}