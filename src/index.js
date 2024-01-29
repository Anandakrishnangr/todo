import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store, presistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
let keyUpdate = null
const Project = () => {
  const [reduxKey, setreduxKey] = useState(0)
  keyUpdate = { update: setreduxKey }
  return <Provider key={reduxKey} store={store}>
    <PersistGate loading={null} persistor={presistor}>
      <App />
    </PersistGate>
  </Provider>
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Project />
    </BrowserRouter>
  </React.StrictMode>
);
export const updateKey = () => keyUpdate.update((prev)=>prev+1)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
