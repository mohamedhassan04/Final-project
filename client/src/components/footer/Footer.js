import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-gl">
        <div className="body-footer">
          <footer>
            <div className="waves">
              <div className="wave" id="wave1"></div>
              <div className="wave" id="wave2"></div>
              <div className="wave" id="wave3"></div>
              <div className="wave" id="wave4"></div>
            </div>
            <ul className="social-icon">
              <li>
                <i class="fab fa-facebook"></i>
              </li>
              <li>
                <i class="fab fa-twitter"></i>
              </li>
              <li>
                <i class="fab fa-instagram"></i>
              </li>
              <li>
                <i class="fab fa-linkedin"></i>
              </li>
            </ul>
            <ul className="menu-footer">
              <li>Home</li>
              <li>About Us</li>
              <li>Calender</li>
              <li>Events</li>
              <li>Contact Us</li>
            </ul>
            <p>©2021 WE RUN website | All Rights Reserved</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
