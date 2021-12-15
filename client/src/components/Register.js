import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userRegister } from "../JS/userSlice/userSlice";
import "./Register.css";
import slogan3 from "../final project design we run/slogan3.png";

const Register = () => {
  const [register, setregister] = useState({
    name: "",
    lastName: "",
    email: "",
    birthdaydate: "",
    city: "",
    password: "",
  });
  const dispatch = useDispatch();
  return (
    <div>
      <div className="bg-reg">
        <div className="regi-gl">
          <div className="img-slog">
            <img
              src={slogan3}
              style={{ width: 620, height: 600 }}
              alt="slogan"
            />
          </div>
          <div id="login">
            <form onSubmit={(e) => e.preventDefault()} className="form-login">
              <span className="fontawesome-user"></span>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) =>
                  setregister({ ...register, name: e.target.value })
                }
              />
              <span className="fontawesome-user"></span>
              <input
                type="text"
                placeholder="Lastname"
                onChange={(e) =>
                  setregister({ ...register, lastName: e.target.value })
                }
              />
              <span className="fontawesome-user"></span>
              <input
                type="text"
                placeholder="Email Adress"
                onChange={(e) =>
                  setregister({ ...register, email: e.target.value })
                }
              />
              <span className="fontawesome-user"></span>
              <input
                type="text"
                placeholder="Birthday date"
                onChange={(e) =>
                  setregister({ ...register, birthdaydate: e.target.value })
                }
              />
              <span className="fontawesome-user"></span>
              <input
                type="text"
                placeholder="City"
                onChange={(e) =>
                  setregister({ ...register, city: e.target.value })
                }
              />

              <span className="fontawesome-lock"></span>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setregister({ ...register, password: e.target.value })
                }
              />

              <button
                className="good"
                onClick={() => {
                  dispatch(userRegister(register));
                }}
              >
                {" "}
                Register{" "}
              </button>
              <h5 className="reg-log">
                You already have account |{" "}
                <Link className="link-to-log" to="/login">
                  sign up{" "}
                </Link>
              </h5>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
