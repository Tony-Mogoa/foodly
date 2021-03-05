import React, { Component } from "react";
import { colors } from "../constants/colors";
class OrderedDish extends Component {
  state = {};
  render() {
    const { img, dishName, dishPrice, count } = this.props.order;
    return (
      <div
        className="d-flex flex-row justify-content-around my-2 p-2 align-items-center rounded"
        style={{
          backgroundColor: colors.lightGrey,
        }}
      >
        <div
          className="rounded-circle"
          style={{
            borderRadius: 15,
            backgroundColor: colors.lightBlue,
            padding: 10,
            width: 48,
            height: 48,
            display: "flex",
            marginRight: 10,
          }}
        >
          <img
            src={img}
            alt={dishName}
            width={36}
            height={36}
            className="nav-icon"
          />
        </div>
        <div className="flex-grow-1">
          <div style={{ fontSize: 15 }}>{dishName}</div>
          <div>
            <span className="text-gold">x</span>
            <b style={{ fontSize: 13 }}>{count}</b>
          </div>
        </div>
        <div style={{ fontSize: 16, fontWeight: "bold" }}>
          <sup className="text-gold">$</sup>
          {count * dishPrice}
        </div>
      </div>
    );
  }
}

export default OrderedDish;
