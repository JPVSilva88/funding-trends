import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './stores';
import ReactGA from 'react-ga';

const store = configureStore();

ReactGA.initialize('UA-122837172-1');
ReactGA.pageview("home", null, null);

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>, document.getElementById('root'));

unregister();

