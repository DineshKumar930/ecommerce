import "./OrderHistory.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelOrder } from "../features/order/orderSlice";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orderHistory);
  const user = useSelector((state) => state.auth.user);

  const userOrders = user
    ? orders.filter(order => order.userId === user.email)
    : [];

  if (userOrders.length === 0) {
    return <div className="order-history-empty">No orders placed yet.</div>;
  }

  return (
    <div className="order-history-container">
      <h2>My Orders</h2>
      {userOrders
        .slice()
        .reverse()
        .map((order) => (
          <div
            key={order.id}
            className={`order-card ${order.status === "Canceled" ? "canceled" : ""}`}
          >
            <div className="order-header">
              <span>Order ID: {order.id}</span>
              <span>Date: {order.date}</span>
              <span
                className={`order-status ${
                  order.status === "Canceled" ? "canceled-status" : ""
                }`}
              >
                {order.status}
              </span>
            </div>

            <div className="order-items">
              {order.items.map((item, idx) => (
                <div key={idx} className="order-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-qty">Qty: {item.qty}</span>
                  <span className="item-price">₹{item.price * item.qty}</span>
                </div>
              ))}
            </div>

            <div className="order-total">Total: ₹{order.total}</div>
            <button
              className="cancel-btn"
              onClick={() => dispatch(cancelOrder(order.id))}
              disabled={order.status === "Canceled"}
            >
              {order.status === "Canceled" ? "Canceled" : "Cancel Order"}
            </button>
          </div>
        ))}
    </div>
  );
};

export default OrderHistory;
