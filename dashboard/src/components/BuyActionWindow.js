import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./Buyactionwindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Ensure this function is marked as async to use 'await'
  const handleBuyClick = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("https://zerodha-bakend.onrender.com/order", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      console.log("Order Response:", response); // Debugging the response

      if (response.data.success) {
        // Handle success
        console.log("Order placed successfully");
        alert("Order placed successfully!");
      } else {
        // Handle error
        console.error("Error placing order:", response.data.message);
        setError(response.data.message);
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Error in sending order request:", error);
      setError("An error occurred while placing the order.");
    } finally {
      setLoading(false);
    }

    GeneralContext.closeBuyWindow(); // Close buy window
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow(); // Close buy window
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button 
            className="btn btn-blue" 
            onClick={handleBuyClick} 
            disabled={loading}
          >
            {loading ? "Placing Order..." : "Buy"}
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>Cancel</button>
        </div>
      </div>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default BuyActionWindow;
