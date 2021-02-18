import React, { Component } from "react";
import bacon from "../assets/img/001-bacon.svg";
import friedChicken from "../assets/img/002-fried chicken.svg";
import cake from "../assets/img/cake.svg";
import candy from "../assets/img/candy.svg";
import Dish from "./dish";
class FoodMenu extends Component {
  state = {
    dishes: [
      { id: "1", dishName: "dish", dishPrice: 300, img: bacon },
      { id: "2", dishName: "dish", dishPrice: 300, img: friedChicken },
      { id: "3", dishName: "dish", dishPrice: 300, img: cake },
      { id: "4", dishName: "dish", dishPrice: 300, img: candy },
      { id: "5", dishName: "dish", dishPrice: 300, img: candy },
      { id: "6", dishName: "dish", dishPrice: 300, img: candy },
      { id: "7", dishName: "dish", dishPrice: 300, img: candy },
      { id: "8", dishName: "dish", dishPrice: 300, img: candy },
      { id: "9", dishName: "dish", dishPrice: 300, img: candy },
      { id: "10", dishName: "dish", dishPrice: 300, img: candy },
      { id: "11", dishName: "dish", dishPrice: 300, img: bacon },
      { id: "12", dishName: "dish", dishPrice: 300, img: friedChicken },
      { id: "13", dishName: "dish", dishPrice: 300, img: cake },
      { id: "14", dishName: "dish", dishPrice: 300, img: candy },
      { id: "15", dishName: "dish", dishPrice: 300, img: candy },
      { id: "16", dishName: "dish", dishPrice: 300, img: candy },
      { id: "17", dishName: "dish", dishPrice: 300, img: candy },
      { id: "18", dishName: "dish", dishPrice: 300, img: candy },
      { id: "19", dishName: "dish", dishPrice: 300, img: candy },
      { id: "20", dishName: "dish", dishPrice: 300, img: candy },
      { id: "21", dishName: "dish", dishPrice: 300, img: candy },
    ],
  };

  render() {
    return (
      <div
        className="d-flex flex-row flex-wrap justify-content-between"
        style={{
          padding: 10,
          alignContent: "flex-start",
          // overflowY: "scroll",
          // overflowX: "hidden",
        }}
      >
        {this.state.dishes.map((dish) => (
          <Dish
            dish={dish}
            key={dish.id}
            onAddOrder={this.props.onHandleAddOrder}
          />
        ))}
      </div>
    );
  }
}

export default FoodMenu;
