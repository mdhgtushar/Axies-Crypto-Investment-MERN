import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Header() {
  const logout = async () => {
    const confirm = window.confirm("are you sure? you want to logout?");
    if (confirm) {
      document.cookie = "token=; Max-Age=0;secure; path=/;";
      const logoutt = await axios.get(
        "http://localhost:5000/api/user/auth/logout"
      );
      if (logoutt.data) {
        alert("Succsfully logout");
        window.location.reload();
      } else {
        alert("something error");
      }
    }
  };
  return (
    <div>
      <div>
        <div
          className="navbar-custom topnav-navbar topnav-navbar-dark"
          style={{
            background:
              "linear-gradient(227.3deg, rgb(138, 32, 140) 0%, rgb(24, 27, 129) 100.84%)",
          }}
        >
          <div className="container-fluid">
            <a href="/" className="topnav-logo">
              <span className="topnav-logo-lg">
                <img
                  src="https://axiesreact.surielementor.com/static/media/logo_dark@2x.d74b33c2ef875e941cbc.png"
                  alt=""
                  height="50"
                />
              </span>
              <span className="topnav-logo-sm">
                <img
                  src="https://axiesreact.surielementor.com/static/media/logo_dark@2x.d74b33c2ef875e941cbc.png"
                  alt=""
                  height="50"
                />
              </span>
            </a>

            <ul className="list-unstyled topbar-right-menu float-right mb-0">
              <li className="dropdown notification-list">
                <a
                  className="nav-link dropdown-toggle nav-user arrow-none mr-0"
                  data-toggle="dropdown"
                  id="topbar-userdrop"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="account-user-avatar">
                    <img
                      src="https://www.gravatar.com/avatar/fc22c651749550dba1a8f62021ac8a8a?s=&amp;d=mp&amp;r=g"
                      alt="user-profile"
                      className="rounded-circle"
                    />
                  </span>
                  <span>
                    <span className="account-user-name">Hobayer</span>
                    <span className="account-position">$0.00</span>
                  </span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown"
                  aria-labelledby="topbar-userdrop"
                >
                  <div className=" dropdown-header noti-title">
                    <h6 className="text-overflow m-0">Welcome !</h6>
                  </div>
                  <a
                    href="#"
                    className="dropdown-item notify-item"
                    onClick={logout}
                  >
                    <i className="bx bx-power-off font-size-16 align-middle mr-1"></i>
                    <span>Logout</span>
                  </a>
                </div>
              </li>
            </ul>
            <p
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#topnav-menu-content"
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </p>
          </div>
        </div>
        <div className="topnav shadow-sm">
          <div className="container-fluid">
            <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
              <div
                className="collapse navbar-collapse"
                id="topnav-menu-content"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link className="nav-link" to="/dashboard">
                      <i className="uil-dashboard mr-1"></i>Dashboard
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle arrow-none"
                      to="/deposits"
                    >
                      <i className="uil-wallet mr-1"></i>Deposit
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link" to="/withdrawals">
                      <i className="uil-history mr-1"></i> Withdrawals
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link text-warning" to="/referral">
                      + Referrals
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <span
                      className="nav-link dropdown-toggle arrow-none"
                      href="#"
                      id="topnav-apps"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="uil-apps mr-1"></i>Profile
                      <div className="arrow-down"></div>
                    </span>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="topnav-apps"
                    >
                      <Link to="/profile" className="dropdown-item">
                        Edit Profile
                      </Link>
                      <b onClick={logout} className="dropdown-item">
                        Logout
                      </b>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
