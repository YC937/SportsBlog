import { useState } from 'react';
import { MUTATION_LOGIN } from '../utils/mutations';
import { useMutation } from '@apollo/client';

export default function LoginForm (props) {
    const [formState, setFormState ] = useState({
        email: '',
        password: ''
    });

    const [login, { error }] = useMutation(MUTATION_LOGIN);

    const handleChange = (event) => {
        event.preventDefault();

        const name = event.target.name;
        const value = event.target.value;

        setFormState({
            ...formState, //Copies the old formState
            [name]: value //Updates the new value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
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
        </form>
    )
}