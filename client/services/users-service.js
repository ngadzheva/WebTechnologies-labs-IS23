const register = userData => {
    const url = 'http://localhost:3001/register';

    const options = {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    };

    sendRequest(url, options, redirect, handleError);
};

const redirect = () => {
    window.location = './login.html';
}