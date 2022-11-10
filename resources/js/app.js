import React from 'react';
import './bootstrap';

import ReactDOM from 'react-dom';
import App from './components/App';

// import './components/Example';

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
