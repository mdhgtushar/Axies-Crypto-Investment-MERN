import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [disabled, setDisabled] = useState(false);
  const login = async (e) => {
    try {
      e.preventDefault();
      const username = e.target.username.value;
      const password = e.target.password.value;
      const loginobj = {
        username,
        password,
      };
      axios.defaults.withCredentials = true;
      const data = await axios.post(
        "http://localhost:5000/api/user/auth/login",
        loginobj
      );
      if (data.data) {
        alert(data.data.message);
        window.location.reload();
      }
      // setDisabled(true);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <div>
        <div class="auth-fluid">
          <div class="auth-fluid-form-box">
            <div class="align-items-center d-flex h-100">
              <div class="card-body">
                <div class="auth-brand text-center text-lg-left">
                  <a href="#" class="logo-dark">
                    <span>
                      <img
                        src="https://axiesreact.surielementor.com/static/media/logo_dark@2x.d74b33c2ef875e941cbc.png"
                        alt=""
                        height="50"
                      />
                    </span>
                  </a>
                  <a href="#" class="logo-light">
                    <span>
                      <img
                        src="https://axiesreact.surielementor.com/static/media/logo_dark@2x.d74b33c2ef875e941cbc.png"
                        alt=""
                        height="50"
                      />
                    </span>
                  </a>
                </div>
                <h4 class="mt-0">Sign In</h4>
                <p class="text-muted mb-4">
                  Enter your email address and password to access account.
                </p>

                <form method="POST" action="#" onSubmit={login}>
                  <input
                    type="hidden"
                    name="_token"
                    value="7CVymxHdZfFLptJwqMxIdC5DZtG1ktoV0zeBMVpm"
                  />
                  <input type="hidden" name="redirect_url" value="" />
                  <div class="form-group">
                    <label for="username">Username</label>
                    <input
                      class="form-control"
                      name="username"
                      type="text"
                      id="username"
                      required=""
                      placeholder="Enter your username"
                    />
                  </div>

                  <div class="form-group">
                    <a href="#" class="text-muted float-right">
                      <small>Forgot your password?</small>
                    </a>
                    <label for="password">Password</label>
                    <input
                      class="form-control"
                      name="password"
                      type="password"
                      required=""
                      id="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div class="form-group mb-0 text-center">
                    <button class="btn btn-primary" type="submit">
                      Sign in
                    </button>
                  </div>
                </form>
                <footer class="footer footer-alt">
                  <p class="text-muted">
                    Don't have an account?{" "}
                    <Link to="/signup" class="text-muted ml-1">
                      <b>Sign Up</b>
                    </Link>
                  </p>
                </footer>
              </div>
            </div>
          </div>
          <div
            class="auth-fluid-right text-center"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/premium-vector/bitcoin-currency-banner-digital-payment-modern-crypto-money-technology_48369-13319.jpg?w=2000)",
            }}
          >
            <div class="auth-user-testimonial"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
