import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-bakend.onrender.com/allorder").then((res) => {
      console.log(res.data);
      setAllOrders(res.data);
    });
  }, []);

  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>

        <h3 className="title">Orders ({allOrders.length})</h3>

        
          <table className="table table-primary">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Qty.</th>
                <th scope="col">Price</th>
                <th scope="col">Date</th>
              </tr>
            </thead>

            {allOrders.map((stock, index) => {
              return (
                <tbody>
                  <tr key={index} className="table-secondary">
                    <td className="table-danger">{stock.name}</td>
                    <td className="table-warning">{stock.qty}</td>
                    <td className="table-info">{stock.price}</td>
                    <td className="table-light">{stock.datePurchased}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
      </div>
    </div>
  );
};

export default Orders;
