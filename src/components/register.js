import React, { Component } from "react";
import { PersonFill } from "react-bootstrap-icons";
import { colors } from "../constants/colors";

class Register extends Component {
  state = {};

  styles = {
    personLogo: {
      // backgroundColor: colors.grey,
      marginTop: 0,
    },
    textLogo: {
      color: colors.blue,
    },
  };

  render() {
    const { personLogo, textLogo } = this.styles;
    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="card"
          style={{
            width: "40rem",
            marginTop: 100,
            marginRight: 20,
            marginLeft: 20,
            borderColor: colors.lightBlue,
          }}
        >
          <PersonFill
            color={colors.lightBlue}
            size={128}
            className="card-img-top"
            style={personLogo}
          />
          <div className="card-body">
            <h2 className="card-title text-center" style={textLogo}>
              Foodly
            </h2>
            <h5 className="text-center">Registration</h5>
            <form>
              <div className="mb-3">
                <label for="full-name" className="form-label">
                  Full name
                </label>
                <input type="text" className="form-control" id="full-name" />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="mb-3">
                <label for="confirm-password" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirm-password"
                />
              </div>
              <div className="mb-3">
                <label for="city" className="form-label">
                  City
                </label>
                <input type="text" className="form-control" id="city" />
              </div>
              <div className="mb-3">
                <label for="formFile" className="form-label">
                  Attach profile picture
                </label>
                <input className="form-control" type="file" id="formFile" />
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
