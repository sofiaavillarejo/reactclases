import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contador from './components/Contador';
import DibujosComplejos from './components/DibujosComplejos';
import DibujosComplejosReactRender from './components/DibujosComplejosReactRender';
import PadreDeporte from './components/PadreDeporte';
import PadreNumero from './components/PadreNumero';
import PadreNumeroCorreccion from './components/PadreNumeroCorreccion';
import Comics from './components/Comics';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Contador inicio="9"/>
    <Contador inicio="14"/> */}
    {/* <DibujosComplejos/> */}
    {/* <DibujosComplejosReactRender/> */}
    {/* <PadreDeporte/> */}
    {/* <PadreNumero/> */}
    {/* <PadreNumeroCorreccion/> */}
    <Comics/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
