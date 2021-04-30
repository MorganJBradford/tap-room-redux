import { createStore } from "redux";
import { Provider } from "react-redux"
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import reducer from "./reducers/keg-list-reducer";
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
