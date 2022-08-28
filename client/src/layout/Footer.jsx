import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">2017 - 2021 © Adib</div>
            <div className="col-md-6">
              <div className="text-md-right footer-links d-none d-md-block">
                <a href="javascript: void(0);">About</a>
                <a href="javascript: void(0);">Support</a>
                <a href="javascript: void(0);">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="right-bar">
        <div className="rightbar-title">
          <a href="##" className="right-bar-toggle float-right">
            <i className="dripicons-cross noti-icon"></i>
          </a>
          <h5 className="m-0">Settings</h5>
        </div>

        <div className="rightbar-content h-100" data-simplebar>
          <div className="p-3">
            <div className="alert alert-warning" role="alert">
              <strong>Customize </strong> the overall color scheme, layout
              width, etc.
            </div>

            <h5 className="mt-3">Color Scheme</h5>
            <hr className="mt-1" />

            <div className="custom-control custom-switch mb-1">
              <input
                type="radio"
                className="custom-control-input"
                name="color-scheme-mode"
                value="light"
                id="light-mode-check"
                onclick="setTheme(false)"
                checked
              />
              <label className="custom-control-label" for="light-mode-check">
                Light Mode
              </label>
            </div>

            <div className="custom-control custom-switch mb-1">
              <input
                type="radio"
                className="custom-control-input"
                name="color-scheme-mode"
                value="dark"
                onclick="setTheme(true)"
                id="dark-mode-check"
              />
              <label className="custom-control-label" for="dark-mode-check">
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="rightbar-overlay"></div>
    </div>
  );
}
