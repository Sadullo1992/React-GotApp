import React from 'react';

const ErrorMessage = () => {
    return (
        <>
            <img src={process.env.PUBLIC_URL + '/img/error.jpeg'} alt="error"/>
            <span>Something goes wrong</span>
        </>
    ) 
}

export default ErrorMessage;