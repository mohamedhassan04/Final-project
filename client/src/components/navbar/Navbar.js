import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../final project design we run/logo.png";
import { logout, userCurrent } from "../../JS/userSlice/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
  }, []);
  let menu;
  if (!isAuth) {
    menu = (
      <Link to="/login">
        <button className="btn-reg">Login</button>
      </Link>
    );
  } else {
    menu = isAuth ? (
      <div className="dropdown">
        <button
          className="btn-reg"
          onClick={() => {
            dispatch(logout());
            navigate("/login");
          }}
        >
          <i class="fas fa-sign-out-alt" />
          Logout
        </button>

        <div className="dropdown-content">
          <div className="navigation">
            <ul>
              <li className="drop-nav">
                <Link className="atom" to="/profil/post">
                  <span className="icon-drop">
                    <i class="far fa-plus-circle"></i>
                  </span>
                  <span className="text-drop">Posts</span>
                </Link>
              </li>
              <li className="drop-nav">
                <Link className="atom" to="/profil">
                  <span className="icon-drop">
                    <i class="far fa-user-circle"></i>
                  </span>
                  <span className="text-drop">Profile</span>
                </Link>
              </li>
              <li className="drop-nav">
                <Link className="atom" to="/contactus">
                  <span className="icon-drop">
                    <i class="fas fa-at"></i>
                  </span>
                  <span className="text-drop">Contact </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ) : null;
  }
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>About Us</li>
        <Link to="/calender">
          <li>Calendar</li>
        </Link>
        <Link to="/photo">
          <li>Photo/Videos</li>
        </Link>
        <Link to="/cardevent">
          <li>Events</li>
        </Link>
        <Link to="/contactus">
          <li>Contact Us</li>
        </Link>
      </ul>
      <div className="header-right">
        <Link to="/login">{menu}</Link>
      </div>
    </div>
  );
};

export default Navbar;
