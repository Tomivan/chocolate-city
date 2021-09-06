import React, { useEffect, useState} from 'react';
import './tweets.css';

const Tweets = () => {
    const [state, setState] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(resp => resp.json())
            .then(
                response => {
                    console.log(response);
                    setState(response)
                },
                err => { 
                    console.log(err)
                }
            )
    },[])
    return (
        <div className="container"></div>
    )
}

export default Tweets;