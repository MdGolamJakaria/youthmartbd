import React from "react";
import Logo from "../../../images/logo.png";
import "./Login.css";

const Login = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="container login-area">
        <div className="row d-flex justify-content-center">
          <img className="login-logo" src={Logo} alt="" />
        </div>
        <div className="row d-flex justify-content-center">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label className="form-check-label" htmlFor="email">
                Email Address:
              </label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label className="form-check-label" htmlFor="password">
                Password:
              </label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <hr />
        <div className="row">
          <a className="btn btn-warning form-control mb-5" href="#" alt="">
            <i class="fab fa-google"></i> Log in with Google
          </a>
        </div>
        <div className="row d-flex justify-content-center ">
          <p>Don't have an account? </p>
          <a href="/CreateAccount"> Sign Up Kor Age Nobrara</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
