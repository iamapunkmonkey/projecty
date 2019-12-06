import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.scss'

const App = () => {
    return (
        <div id="content">
            Hello Projecty!
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('container'));
