import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import Results from './components/results.js';
import myApp from './reducers';
import './index.css';

let store = createStore(myApp);

function render () {
    ReactDOM.render(
            <div>
                < App store = {store} />
                < hr />
                < Results store={store} />
            </div>
            ,
            document.getElementById('root')
    );
}

store.subscribe(render);

render();

