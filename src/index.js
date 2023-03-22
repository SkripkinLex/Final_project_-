import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App/App';
import { Provider } from 'react-redux';
import { store } from './component/store';
import { HashRouter as Router } from 'react-router-dom';


export const baseUrl = 'http://localhost:3333'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
);

