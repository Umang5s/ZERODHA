import React from "react";
import HomePage from "./home/HomePage";

function OpenAccount() {
  return (
    <div className="container text-center" style={{marginTop: "8rem"}}>
      <div className="row">
        <h1>Open a Zerodha account</h1>
        <h6 className="text-muted mt-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </h6>
        <button className="p-2 btn btn-primary fs-5 mb-5 but mt-4">
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
