import { useEffect } from 'react';

const AuthPage = () => {

    const axios = require('axios').default;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const APPURL = process.env.REACT_APP_URL;

    let requestToken = '';
    let sessionId = sessionStorage.getItem('sessionId') || '';

    const getToken = async () => {
        const url = `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`;
        const response = await axios.get(url);
        requestToken = response.data.request_token;

        console.log(`token: ${requestToken}`);
        localStorage.setItem('requestToken', requestToken);
    }

    const authenticate = async () => {

        console.log(`sessionId ${sessionId}`);
        requestToken = '';
        if (sessionId !== '') {
            alert('You are already authenticated');
            window.location.replace(APPURL);
            return;
        }
        await getToken();
        window.location.replace(`https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${APPURL}/success`);
    };

    useEffect(() => {
        authenticate();
    }, []);

    return (
        <div>
            <h3>Redirecting you to the authentication page...</h3>
            <p>If you are not redirected within 5 seconds, please click <a href='/'>here</a> and try again.</p>
        </div>
    );

};

export default AuthPage;