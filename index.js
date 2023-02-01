import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { Context } from './component/context/Context';
import reducer, { initialstate } from './component/reducer/reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Context initialstate={initialstate} reducer={reducer}>
    <App />
    </Context>
    
  
);


