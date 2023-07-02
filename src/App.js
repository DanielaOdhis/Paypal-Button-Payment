import React from 'react';
import swing from './swing.jpg';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './App.css';
//import PaypalPayment from './PaypalPayment.js';

function App() {
  const initialOptions = {
    clientId: "Af_HnWrKC9SZhOfKIouQ047zc36xMS64RaDYbInQWey0Aldin3nRvdTzYICOfND666l7g5CKukl1-ghU",
    currency: "USD",
    intent: "capture",
};
  return (
    <div className="App">
      <h1>Swing</h1>
      <h1>Swing</h1>
      <PayPalScriptProvider options={initialOptions}>
     <img src={swing} alt='Swing'/>
     <p>A wooden swing and comfy pillows, suitable for your balcony!</p>
     <p>150$</p>
     <div  className='buttons'>
     <PayPalButtons />
     </div>
     </PayPalScriptProvider>
    </div>
  );
}

export default App;
