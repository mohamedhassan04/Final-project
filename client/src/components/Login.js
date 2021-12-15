import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../JS/userSlice/userSlice";
import "./Login.css";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  InstagramLoginButton,
} from "react-social-login-buttons";
import slogan4 from "../final project design we run/slogan4.png";

const Login = () => {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <div>
      <div className="bg-main">
        <div className="log">
          <div className="log-gl">
            <div className="img-slog">
              <img
                src={slogan4}
                style={{ width: 520, height: 400 }}
                alt="slo"
              />
            </div>
            <div id="login">
              <form onSubmit={(e) => e.preventDefault()} name="form-login">
                <span className="fontawesome-user"></span>
                <input
                  type="text"
                  placeholder="Email Adress"
                  onChange={(e) =>
                    setlogin({ ...login, email: e.target.value })
                  }
                />

                <span className="fontawesome-lock"></span>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setlogin({ ...login, password: e.target.value })
                  }
                />
                <div className="btn-log">
                  <button
                    className="good"
                    onClick={() => {
                      dispatch(userLogin(login));
                      setTimeout(() => {
                        navigate("/profil");
                      }, 1000);
                      setTimeout(() => {
                        window.location.reload();
                      }, 1000);
                    }}
                  >
                    Login
                  </button>
                </div>
                <h5 className="link-to">
                  You already have account |
                  <Link className="link-to-reg" to="/register">
                    Register Now
                  </Link>
                </h5>
                <div className="social-connecting">
                  <h5> or Connect with :</h5>
                  <FacebookLoginButton />
                  <GoogleLoginButton />
                  <InstagramLoginButton />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
