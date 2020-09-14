import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../button/index';
import TextBox from '../textBox/index';
import './index.css';

const Header = ({ children, values, onChangeHandler }) => {
    const history = useHistory();

    const username = localStorage.getItem('username');

    const logoutHandler = () => {
        localStorage.removeItem('username');
        history.push('/login');
    }

    const showNav = () => (
            <nav>
                <Button name={username} />
                <TextBox value={values.firstTextInput} handleChange={onChangeHandler} textInputName="firstTextInput" placeholder="Enter URL here..." type="text" />
                <TextBox value={values.secondTextInput} handleChange={onChangeHandler} textInputName="secondTextInput" placeholder="Enter URL here..." type="text" />
                <Button name="Logout" handler={logoutHandler} />
            </nav>
    )

    return (
        <Fragment>
            { showNav() }
            { children }
        </Fragment>
    )
}

export default Header;