import React from "react";
import "./EventInfo.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import fb from "../../final project design we run/svg/logoface.png";
import twit from "../../final project design we run/svg/logotwit.png";
import inst from "../../final project design we run/svg/logoinsta.png";
import line from "../../final project design we run/red.png";
import TabInfo from "../tabinfo/TabInfo";

const EventInfo = () => {
  const location = useLocation();
  const { event } = location.state;
  return (
    <div>
      <div className="bg-info">
        <div className="info-gl">
          <div className="img-imfo">
            <img
              src={`http://localhost:5000${event.addoffcielphoto}`}
              style={{ width: 320, height: 300 }}
              alt="bgimg"
            />
          </div>
          <div className="info-sec">
            <div className="title-info">
              <h2>{event.name}</h2>
              <h3> {event.date}</h3>
              <div className="dur-dis-info">
                <h4>
                  duration: <span className="hhh">{event.duration}</span>{" "}
                </h4>
                <h4 className="dis-eve">
                  distance:
                  <span className="hhhh">
                    {event.distance.map((ev) => (
                      <p> {ev.value}</p>
                    ))}
                  </span>
                </h4>
              </div>
              <div className="para-info">
                <p>{event.description}</p>
              </div>
              <div className="register-fel">
                <div className="btn-gl-gl">
                  <img src={line} alt="line" />
                </div>
                <div className="btn-gl-gl-gl">
                  <Link to="/formpar">
                    <button>Register</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="social-info">
              <div className="shared-info">
                <h4>Shared</h4>
              </div>
              <div className="shared-img">
                <img src={fb} alt="fb" />
                <img src={twit} alt="twi" />
                <img src={inst} alt="inst" />
              </div>
            </div>
          </div>
        </div>
        <TabInfo />
      </div>
    </div>
  );
};

export default EventInfo;
