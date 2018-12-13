import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as registerServiceWorker from './serviceWorker';

//Import Semantic UI and Font-awesome
import 'semantic-ui-css/semantic.min.css';
import 'font-awesome/css/font-awesome.css'

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker.register();