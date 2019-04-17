import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import App from './Components/App/';
import './Components/App/reset.scss';

render(<App />, document.getElementById('root'));
