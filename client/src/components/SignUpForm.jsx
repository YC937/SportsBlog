import { useState } from 'react';
import { MUTATION_SIGNUP } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../utils/LoginContext';
import { SIGNUP } from '../utils/actions';

export default function LoginForm(props) {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [userData, setUserData] = useState({
        _id: '',
        username: '',
        email: '',
    });

    const [signup, { error }] = useMutation(MUTATION_SIGNUP, {
        fetchPolicy: 'no-cache',
    });

    const [state, dispatch] = useLogin();

    const handleChange = (event) => {
        event.preventDefault();

        const name = event.target.name;
        const value = event.target.value;

        setFormState({
            ...formState, //Copies the old formState
            [name]: value //Updates the new value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        setShowError(false);
        setShowSuccess(false);


        try {
            const { data } = await signup({
                variables: { ...formState }
            });

            console.log(data);
            const token = data?.login.token || '';
            const user = data?.login.user || {};
            console.log(data?.login.token);
            console.log(data?.login.user);
            setShowSuccess(true);
            setUserData(user);

            // Save Token
            Auth.setToken(token);
            // Update the state
            dispatch({
                type: SIGNUP, payload: {
                    token: token,
                    user: user
                }
            });
            return navigate('/');
        } catch (err) {
            console.log(err);
            setShowError(true);
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <h3 className='lables'>Username:</h3>
            <input
                name="username"
                type="text"
                placeholder="username"
                value={formState.username}
                onChange={handleChange}
            />
            <h3 className='lables'>Email:</h3>
            <input
                name="email"
                type="email"
                placeholder="email"
                value={formState.email}
                onChange={handleChange}
            />
            <h3 className='lables'>Password:</h3>
            <input
                name="password"
                type="password"
                placeholder="password"
                value={formState.password}
                onChange={handleChange}
            />
            <button type="submit">Signup</button>
            {showError ? (
                <h4 style={{ color: "red" }}>
                    You encountered an error signing up! Please try again.
                </h4>
            ) : (
                <></>
            )}
            {showSuccess ? (
                <h4 style={{ color: "green" }}>
                    You have been Successfully signed up! Welcome, {userData.username}!
                </h4>
            ) : (
                <></>
            )}
        </form>
    )
}