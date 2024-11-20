import React from "react";
import LoginLayout from "./layout";

const Login = () => {
  return (
    <LoginLayout>
      <div className="page_auth">
        <div className="container mx-auto">
          <div className="middle_content flex items-center">
            <div className="box_cn_auth">
              <div className="auth_logo">
                <a href="index.html">
                  <img src="images/logo.svg" alt="Amnads Logo" />
                </a>
              </div>
              <div className="auth_head">
                <h3>Hi, Welcome to Amnads!</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                </p>
              </div>
              <form className="form_sty" action="#">
                <div className="form-group mb-3">
                  <label className="label_sty" htmlFor="email">
                    Email address
                  </label>
                  <div className="input_group">
                    <span className="frm_icon email_icon"></span>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Email address"
                    />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label className="label_sty" htmlFor="password">
                    Password
                  </label>
                  <div className="input_group">
                    <span className="frm_icon pass_icon"></span>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="password_rw flex items-center">
                  <div className="remmber_pass checkbox_item">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="forget_pass ms-auto">
                    <a href="#" className="forget_link">
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-full"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </LoginLayout>
  );
};

export default Login;
