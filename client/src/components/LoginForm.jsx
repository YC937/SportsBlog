import { useState } from 'react';
import { MUTATION_LOGIN } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../utils/LoginContext';
import { LOGIN } from '../utils/actions';

export default function LoginForm(props) {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
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

    const [login, { error }] = useMutation(MUTATION_LOGIN, {
      fetchPolicy: 'no-cache',
    });

    const [ state, dispatch ] = useLogin();

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
        console.log('Form State:', formState);
        setShowError(false);
        setShowSuccess(false);


        try {
            const { data } = await login({
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
            Auth.login(token);
            // Update the state
            dispatch({
                type: LOGIN, payload: {
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
            <input
                name="email"
                type="email"
                placeholder="email@mail.com"
                value={formState.email}
                onChange={handleChange}
            />
            <input
                name="password"
                type="password"
                placeholder="password"
                value={formState.password}
                onChange={handleChange}
            />
            <button type="submit">Login</button>
      { showError ? (
        <h4 style={{color: "red"}}>
          Wrong password! Please try again.
        </h4>
      ) : (
        <></>
      )}
      { showSuccess ? (
        <h4 style={{color: "green"}}>
          Login Successful! Hello, {userData.username}!
        </h4>
      ) : (
        <></>
      )}
    </form>
  )
}