import React from 'react';
import ReactDOM from 'react-dom';
import{ BrowserRouter }from 'react-router-dom'
import fastclick from 'fastclick'


import App from './App';
fastclick.attach(document.body);

ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>
, document.getElementById('root'));