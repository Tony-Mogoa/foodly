import React, { Component } from "react";
import OrderedDish from "./orderedDish";
import { colors } from "../constants/colors";
class OrdersPane extends Component {
  state = {};
  render() {
    const { orders } = this.props;
    return (
      <div
        style={{
          padding: 10,
          overflowY: "scroll",
          overflowX: "hidden",
          height: 600,
        }}
      >
        <div style={{ fontSize: 20, color: colors.orange }}>
          <b>Orders</b>
        </div>

        <div
          style={{
            padding: 5,
            borderColor: colors.grey,
          }}
          className="d-flex flex-column justify-content-around rounded"
        >
          {orders.map((order) => (
            <OrderedDish order={order} />
          ))}

          {orders.length > 0 && (
            <button
              className="btn btn-default rounded-pill text-white p-2"
              style={{ backgroundColor: colors.orange, fontWeight: "bold" }}
              onClick={() => alert("Coming soon...")}
            >
              Checkout
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default OrdersPane;
