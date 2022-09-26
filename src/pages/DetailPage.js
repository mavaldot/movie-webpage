import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DetailPage = () => {

    const APPURL = process.env.REACT_APP_URL;
    let sessionId = sessionStorage.getItem('sessionId') || '';

    // const axios = require('axios').default;
    // const API_KEY = process.env.REACT_APP_API_KEY

    const [searchParams, setSearchParams] = useSearchParams();

   let { id } = useParams();
   console.log(id);

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);


    if (isLoading) {
        return <div>Loading...</div>
    }
    else {
        return (
            <div>
                <p>{id}</p>
            </div>
        );

    }
};

export default DetailPage;