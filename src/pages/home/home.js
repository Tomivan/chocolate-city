import React, { useEffect, useState} from 'react';
import { Link, navigate } from '@reach/router';
import './home.css';

const Home = () => {
    const [state, setState] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users', {
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
        <div className="container">
            <h1>Chocolate City</h1>
            <table>
                <thead>
                    <tr>
                        <th>Artist</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {state && state.map( response =>
                    <tr key={response.id}>
                        <td>{response.name}</td>
                        <td><button className="view-albums"  onClick={() => navigate('/albums', {state: response.id})}>View Albums</button></td>
                        <td><button className="view-tweets"><Link to="/tweets">View Tweets</Link></button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Home;