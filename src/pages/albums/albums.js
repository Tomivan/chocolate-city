import React, { useEffect, useState} from 'react';
import './albums.css';

const Albums = (props) => {
    const response = props.location.state
    const id = response.id
    const [state, setState] = useState(null);
    useEffect(() => {
        console.log({id, loc: props})
        fetch('https://jsonplaceholder.typicode.com/albums?userId=' + id, {
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

export default Albums;