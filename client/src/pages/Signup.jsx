import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Signup = () => {
  const signup = async (e) => {
    e.preventDefault();
    const full_name = e.target.full_name.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const gender = e.target.gender.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.password_confirmation.value;
    if (password != confirmPassword) {
      alert("Password Should Be Same");
      return false;
    }
    const userObj = {
      full_name,
      username,
      email,
      phone,
      gender,
      password,
      confirmPassword,
    };
    try {
      const getReturn = await axios.post(
        "http://localhost:5000/api/user/auth/register",
        userObj
      );
      alert(getReturn.data.message);
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div>
      <div class="auth-fluid">
        <div class="auth-fluid-form-box">
          <div class="align-items-center d-flex h-100">
            <div class="card-body">
              <div class="auth-brand text-center text-lg-left">
                <a href="/" class="logo-dark">
                  <span>
                    <img
                      src="https://axiesreact.surielementor.com/static/media/logo_dark@2x.d74b33c2ef875e941cbc.png"
                      alt=""
                      height="50"
                    />
                  </span>
                </a>
                <a href="/" class="logo-light">
                  <span>
                    <img
                      src="https://axiesreact.surielementor.com/static/media/logo_dark@2x.d74b33c2ef875e941cbc.png"
                      alt=""
                      height="50"
                    />
                  </span>
                </a>
              </div>

              <h4 class="mt-0">Free Sign Up</h4>
              <p class="text-muted mb-4">
                Don't have an account? Create your account, it takes less than a
                minute
              </p>

              <form method="POST" onSubmit={signup}>
                <div class="form-group">
                  <label for="fullname">Full Name</label>
                  <input
                    class="form-control "
                    type="text"
                    id="full_name"
                    placeholder="Enter your name"
                    required=""
                    name="full_name"
                  />
                </div>

                <div class="form-group">
                  <label for="emailaddress">Email address</label>
                  <input
                    class="form-control "
                    type="email"
                    id="emailaddress"
                    required=""
                    placeholder="Enter your email"
                    name="email"
                  />
                </div>
                <div class="form-group">
                  <label for="emailaddress">Phone Number</label>
                  <input
                    class="form-control "
                    type="phone"
                    id="phone"
                    required=""
                    placeholder="Enter your Phone"
                    name="phone"
                  />
                </div>
                <div class="form-group">
                  <label for="username">Username</label>
                  <input
                    class="form-control "
                    type="text"
                    id="username"
                    required=""
                    placeholder="Enter your username"
                    name="username"
                  />
                </div>
                <div class="form-group">
                  <label for="username">Username</label>
                  <select name="gender" id="gender" required>
                    <option value="select" selected>
                      Select One
                    </option>
                    <option value="male" selected>
                      Male
                    </option>
                    <option value="female" selected>
                      Female
                    </option>
                    <option value="other" selected>
                      Other
                    </option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    class="form-control "
                    type="password"
                    required=""
                    id="password"
                    placeholder="Enter your password"
                    name="password"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password Confirmation</label>
                  <input
                    class="form-control "
                    type="password"
                    required=""
                    id="password_confirmation"
                    placeholder="Confirmation password"
                    name="password_confirmation"
                  />
                </div>

                <div class="form-group">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="checkbox-signup"
                      required=""
                    />
                    <label class="custom-control-label" for="checkbox-signup">
                      I accept {/* <a href="#" class="text-muted"> */}
                      Terms and Conditions
                      {/* </a> */}
                    </label>
                  </div>
                </div>

                <div class="form-group mb-0 text-center">
                  <button class="btn btn-primary" type="submit">
                    Sign Up
                  </button>
                </div>
              </form>

              <footer class="footer footer-alt">
                <p class="text-muted">
                  Already have account?{" "}
                  <Link to="/login" class="text-muted ml-1">
                    <b>Log In</b>
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
  );
};

export default Signup;
