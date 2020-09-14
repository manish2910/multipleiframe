import React, { useState } from 'react';
import Header from '../components/header/index';
import ViewBox from '../components/viewBox/index';

const Main = () => {
    const [ values, setValues ] = useState({
        firstTextInput:"",
        secondTextInput:""
    });

    const { firstTextInput, secondTextInput } = values;

    const handleChange = name => e => {
        setValues({
            ...values,
            [name]:e.target.value
        });
    };

    const showMain = () => (
        <Header values={values} onChangeHandler={handleChange}>
            <div className="iframe_main">
                <ViewBox pageURL={firstTextInput} title="Hello" />
                <ViewBox pageURL={secondTextInput} title="hello" />
            </div>
        </Header>
    )

    return showMain()
}

export default Main;