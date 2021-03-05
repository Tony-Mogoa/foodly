import React, { Component } from "react";
import { PlusCircleFill } from "react-bootstrap-icons";
import { colors } from "../constants/colors";

class Dish extends Component {
  state = {
    plusColor: colors.darkGrey,
  };

  handleMouseOver = () => {
    this.setState({ plusColor: colors.orange });
  };

  handleMouseLeave = () => {
    this.setState({ plusColor: colors.darkGrey });
  };

  render() {
    const { dish } = this.props;
    return (
      <div
        className="rounded border d-flex flex-column align-items-center"
        style={{
          marginTop: 10,
          width: 200,
          borderColor: colors.grey,
        }}
      >
        <div style={{ padding: 10 }}>
          <img src={dish.img} alt={dish.dishName} width={128} height={128} />
        </div>
        <div
          style={{
            width: "100%",
            padding: 10,
            backgroundColor: colors.lightGrey,
          }}
        >
          <p className="text-start">{dish.dishName}</p>
          <div className="d-flex justify-content-between">
            <div style={{ fontSize: 16, fontWeight: "bold" }}>
              <sup className="text-gold">$</sup>
              {dish.dishPrice}
            </div>
            <div
              className="rounded-circle add-order-btn"
              style={{
                width: 48,
                height: 48,
                padding: 1,
                display: "flex",
              }}
              onMouseOver={this.handleMouseOver}
              onMouseLeave={this.handleMouseLeave}
              onClick={() => this.props.onAddOrder(dish)}
            >
              <PlusCircleFill
                size={36}
                color={this.state.plusColor}
                className="nav-icon"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dish;
