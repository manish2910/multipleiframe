import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import TextBox from '../components/textBox/index';
import Button from '../components/button/index';

const Login = () => {
    const storedUsername = localStorage.getItem('username');
    const history = useHistory();

    const [ values, setValues ] = useState({
        username:"",
        password:"",
    });

    if(storedUsername){
        return <Redirect to="/" />;
    }

    const { username } = values;

    const handleSubmit = e => {
        e.preventDefault();
        if(username){
            localStorage.setItem('username', username);
            history.push('/');
        }
    };

    const handleChange = name => e => {
        setValues({
            ...values,
            [name]:e.target.value
        })
    };

    const showForm = () => (
        <div className="form">
            <div className="login_heading">Login to Continue</div>
            <div class="container">
                <div>
                    <label className="label">Enter Username:</label><br/>
                    <TextBox type="text" value={values.username} placeholder="Enter Username..." textInputName="username" handleChange={handleChange} />
                </div>
                <div>
                    <label className="label">Enter Password:</label><br/>
                    <TextBox type="password" value={values.password} placeholder="Enter Password..." textInputName="password" handleChange={handleChange} />
                </div>
                <div>
                    <Button name="Login" handler={handleSubmit}/>
                </div>
            </div>
        </div>
    );

    return showForm()
}

export default Login;