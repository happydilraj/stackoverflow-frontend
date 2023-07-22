import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers'
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

Kommunicate.init("2946d11aa8a208820361195ecfef3e096", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});

const store = createStore(Reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

reportWebVitals();
