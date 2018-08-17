import React from 'react';
import ReactDOM from 'react-dom';

import './style/bootstrap.min.css';

import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
