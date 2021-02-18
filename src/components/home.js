import React, { Component } from "react";
import bg from "../assets/img/bg.svg";
import {
  House,
  Gear,
  Heart,
  CreditCard2Front,
  Clock,
} from "react-bootstrap-icons";
import { colors } from "../constants/colors";
import FoodMenu from "./foodMenu";
import RightPane from "./rightPane";

class Home extends Component {
  state = {
    iconColorHouse: colors.black,
    iconColorClock: colors.black,
    iconColorHeart: colors.black,
    iconColorCredit: colors.black,
    iconColorGear: colors.black,
    orders: [],
  };

  render() {
    const {
      iconColorHouse,
      iconColorClock,
      iconColorHeart,
      iconColorCredit,
      iconColorGear,
      orders,
    } = this.state;
    return (
      <div className="home-container">
        <div className="side-nav">
          <div className="side-nav-item">
            <div
              className="rounded-circle icon-container"
              onMouseOver={this.handleMouseOverHouse}
              onMouseLeave={this.handleMouseLeaveHouse}
            >
              <House color={iconColorHouse} size={20} className="nav-icon" />
            </div>
          </div>
          <div className="side-nav-item">
            <div
              className="rounded-circle icon-container"
              onMouseOver={this.handleMouseOverClock}
              onMouseLeave={this.handleMouseLeaveClock}
            >
              <Clock color={iconColorClock} size={20} className="nav-icon" />
            </div>
          </div>
          <div className="side-nav-item">
            <div
              className="rounded-circle icon-container"
              onMouseOver={this.handleMouseOverHeart}
              onMouseLeave={this.handleMouseLeaveHeart}
            >
              <Heart color={iconColorHeart} size={20} className="nav-icon" />
            </div>
          </div>
          <div className="side-nav-item">
            <div
              className="rounded-circle icon-container"
              onMouseOver={this.handleMouseOverCredit}
              onMouseLeave={this.handleMouseLeaveCredit}
            >
              <CreditCard2Front
                color={iconColorCredit}
                size={20}
                className="nav-icon"
              />
            </div>
          </div>
          <div className="side-nav-item">
            <div
              className="rounded-circle icon-container"
              onMouseOver={this.handleMouseOverGear}
              onMouseLeave={this.handleMouseLeaveGear}
            >
              <Gear color={iconColorGear} size={20} className="nav-icon" />
            </div>
          </div>
        </div>

        <div className="main">
          <div className="upper">
            <div className="title-area">
              <p style={{ fontSize: 25 }}>Today Menu</p>
              <input
                type="text"
                size="20"
                className="search-foodly"
                placeholder="Search Foodly"
              />
            </div>
            <div
              className="svg-desc d-flex justify-content-end align-items-center"
              style={{ height: 250, fontSize: 30 }}
            >
              <span style={{ marginRight: 250 }}>
                Hello <b>Jeremy</b>,
                <br />
                <span style={{ fontSize: 15 }}>
                  Get free deliveries with any <b>$20+</b> purchase!
                </span>
              </span>
            </div>
          </div>
          <div className="lower">
            <FoodMenu onHandleAddOrder={this.handleAddOrder} />
          </div>
        </div>
        <div className="right-pane">
          <RightPane orders={orders} />
        </div>
      </div>
    );
  }

  findOrder = (id) => {
    return this.state.orders.filter((item) => item.id === id).length > 0;
  };

  handleAddOrder = (dish) => {
    if (this.findOrder(dish.id)) {
      console.log(dish);
      this.setState((state) => {
        const orders = state.orders.map((order) => {
          if (order.id === dish.id) {
            let updatedOrder = { ...order, count: order.count + 1 };
            return updatedOrder;
          } else {
            return order;
          }
        });
        return { orders };
      });
    } else {
      console.log("noitem");
      const order = { ...dish, count: 1 };
      this.setState((state) => {
        const orders = [...state.orders, order];

        return {
          orders,
        };
      });
    }
  };

  handleMouseOverHouse = () => {
    this.setState({ iconColorHouse: colors.white });
  };

  handleMouseLeaveHouse = () => {
    this.setState({ iconColorHouse: colors.black });
  };

  handleMouseOverClock = () => {
    this.setState({ iconColorClock: colors.white });
  };

  handleMouseLeaveClock = () => {
    this.setState({ iconColorClock: colors.black });
  };

  handleMouseOverHeart = () => {
    this.setState({ iconColorHeart: colors.white });
  };

  handleMouseLeaveHeart = () => {
    this.setState({ iconColorHeart: colors.black });
  };

  handleMouseOverCredit = () => {
    this.setState({ iconColorCredit: colors.white });
  };

  handleMouseLeaveCredit = () => {
    this.setState({ iconColorCredit: colors.black });
  };

  handleMouseOverGear = () => {
    this.setState({ iconColorGear: colors.white });
  };

  handleMouseLeaveGear = () => {
    this.setState({ iconColorGear: colors.black });
  };
}

export default Home;
