import React from 'react';
import { Router } from '@reach/router';
import Home from './home/home';
import Albums from './albums/albums';
import Tweets from './tweets/tweets';


const Pages = () => {
    return(
        <Router>
            <Home path="/" />
            <Albums path="/albums" />
            <Tweets path="/tweets" />
        </Router>
    );
};

export default Pages;