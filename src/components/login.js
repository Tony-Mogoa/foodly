import React, { Component } from "react";
import { PersonFill } from "react-bootstrap-icons";
import { colors } from "../constants/colors";

class Login extends Component {
  state = {};

  styles = {
    personLogo: {
      backgroundColor: colors.grey,
      marginTop: 0,
    },
    textLogo: {
      color: colors.blue,
    },
  };
  render() {
    const { personLogo, textLogo } = this.styles;
    return (
      <div className="d-flex align-items-center flex-row justify-content-center">
        <div
          className="card"
          style={{
            width: "25rem",
            marginTop: 100,
            marginRight: 20,
            marginLeft: 20,
          }}
        >
          <PersonFill
            color={colors.blue}
            size={128}
            className="card-img-top"
            style={personLogo}
          />
          <div className="card-body">
            <h2 className="card-title text-center" style={textLogo}>
              Foodly Login
            </h2>
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
