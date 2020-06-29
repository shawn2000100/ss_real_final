import React from 'react';
import ReactDOM from 'react-dom';

import Main from 'components/Main.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Amplify from "aws-amplify";
import config from "./aws-exports";

Amplify.configure(config);

const federated = {
    googleClientId: "967882595372-lh4onr61ms68l27vn9jsg3mulod4q7q0.apps.googleusercontent.com"
}

window.onload = function() {

    ReactDOM.render(
            <Main federated={federated}/>,
        document.getElementById('root')
    );
};
