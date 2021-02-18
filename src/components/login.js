import React, { Component } from "react";
import { colors } from "../constants/colors";
import bg from "../assets/img/bg.svg";

class Login extends Component {
  state = {};

  componentDidUpdate() {
    document.body.style.backgroundImage = `url(${bg})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
  }

  componentDidMount() {
    document.body.style.backgroundImage = `url(${bg})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
  }

  styles = {
    textLogo: {
      color: colors.white,
    },
    loginText: {
      color: colors.blue,
    },
  };
  render() {
    const { textLogo, loginText } = this.styles;
    return (
      <React.Fragment>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1 className="text-center" style={textLogo}>
            Foodly
          </h1>
          <div
            className="card"
            style={{
              width: "25rem",
            }}
          >
            <div className="card-body">
              <h5 className="card-title text-center" style={loginText}>
                Login
              </h5>
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
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
