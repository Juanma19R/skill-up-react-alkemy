// Libraries
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';

function Login () {
    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email === '' || password === '') {
            swAlert(<h2>Los campos no pueden estar vacios</h2>);
            return;
        }

        if (email !== '' && !regexEmail.test(email)) {
            swAlert(<h2>Debes escribir un email valido</h2>);
            return;
        }

        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            swAlert(<h2>Email o password incorrectos</h2>);
            return;
        }

        axios 
            .post('http://challenge-react.alkemy.org', {email, password})
            .then(res => {
                swAlert(<h2>Iniciando seccion correctamente</h2>);
                const tokenReceived = res.data.token;
                localStorage.setItem('token', tokenReceived);
                navigate('/list');
            })
    }

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <span>Email: </span><br/>
                    <input type='text' name='email' />
                </label>
                <br/>
                <label>
                    <span>Password: </span><br/>
                    <input type='password' name='password'/>
                </label>
                <br/>
                <button type='submit'>Ingresar</button>
            </form>
        </>
    );
}

export default Login;