import React, { useState } from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";

import { SpinnerCircular } from "spinners-react";

// REPLACE WITH YOUR PUBLIC KEY AVAILABLE IN: https://developers.mercadopago.com/panel
initMercadoPago("APP_USR-d6b54237-cca0-490f-900a-59405851aa7b");

function App() {
  const backend_url = "http://localhost:8000";

  const item_1 = {
    quantity: "1",
    price: "500",
    amount: 7,
    description: "5 Titas",
  };
  const item_2 = {
    quantity: "1",
    price: "1500",
    amount: 20,
    description: "3 Birras",
  };
  const item_3 = {
    quantity: "1",
    price: "5000",
    amount: 15,
    description: "Choppera",
  };

  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setOrderData] = useState(item_1);

  const handleClick = () => {
    setIsLoading(true);
    fetch(backend_url + "/create_preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => {
        return response.json();
      })
      .then((preference) => {
        setPreferenceId(preference.id);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const renderSpinner = () => {
    if (isLoading) {
      return (
        <div className="spinner-wrapper">
          <SpinnerCircular сolor="#800000" />
        </div>
      );
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
