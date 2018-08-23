import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/style.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'unstated';

ReactDOM.render(
                <Provider>
                  <App />,
                </Provider>,
                document.getElementById('root'));
registerServiceWorker();

module.hot.accept();