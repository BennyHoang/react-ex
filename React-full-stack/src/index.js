import React from 'react';
import axios from 'axios';

import ReactDOM from 'react-dom';

import App from './components/App';

axios.get('api/contests')
    .then(res => {
        ReactDOM.render(
            <App initialContests={}/>,
            document.getElementById('root')
        );
    })
    .catch(console.error);



