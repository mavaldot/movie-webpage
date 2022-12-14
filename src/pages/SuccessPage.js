import { useEffect } from 'react';

const SuccessPage = () => {

    const axios = require('axios').default;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const APPURL = process.env.REACT_APP_URL;

    const getSessionKey = async () => {
        let requestToken = localStorage.getItem('requestToken') || '';
        if (requestToken === '') {
            alert('There was an error. Please try again');
            window.location.replace(`${APPURL}`);
            return;
        }

        const response = await axios.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`, {
            request_token: requestToken
        })
        console.log(response);
        if (response.status !== 200) return; 
        let sessionId = response.data.session_id;

        sessionStorage.setItem('sessionId', sessionId);
        window.location.replace(`${APPURL}`);
    };

    useEffect(() => {
        getSessionKey();
    }, []);

    return (
        <div>
            <br></br>
            <p>You are being redirected to the webpage...</p>
            <p>Not working? Click <a href='/'>here</a></p>
        </div>
    )
};

export default SuccessPage;