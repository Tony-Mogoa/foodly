import React, { Component } from "react";
import { PersonFill, ChevronDown } from "react-bootstrap-icons";
import { colors } from "../constants/colors";
import OrdersPane from "./ordersPane";
class RightPane extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <div
          className="d-flex flex-row justify-content-around align-items-center rounded border"
          style={{
            marginTop: 10,
            width: 180,
            padding: 5,
            marginRight: 10,
          }}
        >
          <div
            className="rounded-circle"
            style={{
              width: 48,
              height: 48,
              padding: 1,
              display: "flex",
              backgroundColor: colors.orange,
            }}
          >
            <PersonFill color={colors.white} size={36} className="nav-icon" />
          </div>
          <div className="d-flex flex-column">
            <div style={{ fontSize: 13 }}>
              <b>Jeremy</b>
              <br />
              <span>User</span>
            </div>
          </div>
          <div
            className="rounded-pill down-icon-container"
            style={{
              width: 20,
              height: 20,
              padding: 1,
              display: "flex",
            }}
          >
            <ChevronDown color={colors.black} size={8} className="nav-icon" />
          </div>
        </div>
        <div className="w-100">
          <br />
          <OrdersPane orders={this.props.orders} />
        </div>
      </div>
    );
  }
}

export default RightPane;
