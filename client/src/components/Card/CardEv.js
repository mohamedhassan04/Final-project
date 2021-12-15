import React, { useEffect, useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  eventDel,
  eventLike,
  eventunLike,
} from "../../JS/userSlice/eventSlice";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ModalCard from "../modalcard/ModalCard";

const CardEv = ({ event, ping, setping }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [like, setLike] = useState(false);
  const [ev, setev] = useState({});
  const isAuth = localStorage.getItem("token");
  const handleLike = () => {
    dispatch(eventLike({ id: event.event?._id, userid: user?._id }));
    setLike(!like);
    setping(!ping);
  };
  const handleUnLike = () => {
    dispatch(eventunLike({ id: event.event?._id, userid: user?._id }));
    setLike(!like);
    setping(!ping);
  };

  useEffect(() => {
    setev(event);
  }, []);
  console.log(event);
  const handleDelete = () => {
    dispatch(eventDel(ev.event._id));
    Swal.fire("Good job!", "event deleted!", "success");
    window.location.reload();
  };
  return (
    <div>
      <div className="card-gl">
        <div className="card-container">
          <div className="img-container">
            <img
              src={`http://localhost:5000${event.addoffcielphoto}`}
              alt="img"
            />
          </div>
          <div className="card-content">
            <div className="card-title">
              <h2>{event.name}</h2>
              <h3>{event.date}</h3>
            </div>
            <div className="card-body">
              <p>{event.description.slice(0, 80)}...</p>
            </div>
            <div className="card-loc">
              <i class="fal fa-map-marked-alt"></i> {event.location}
            </div>
            <div className="btn-gl">
              <div className="btn-register">
                <Link to={isAuth ? `/formpar/${event._id}` : "/login"}>
                  <button>Register</button>
                </Link>
              </div>
              <div className="btn-result">
                <Link to="/">
                  <button>Result</button>
                </Link>
              </div>
              {event?.creator?._id === user?._id || user?.isAdmin ? (
                <div className="btn-groupe-ev">
                  <div className="btn-delete">
                    <button onClick={handleDelete}>
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </div>
                  <div className="btn-ed">
                    <ModalCard
                      ping={ping}
                      setping={setping}
                      eventId={event?._id}
                    />
                  </div>
                </div>
              ) : null}
            </div>
            <div className="likes">
              {like ? (
                <i class="far fa-heart" onClick={handleUnLike}></i>
              ) : (
                <i class="far fa-heart" onClick={handleLike}></i>
              )}

              <h6>{event.likes.length} likes</h6>
            </div>
          </div>
          <div className="btn-view">
            <button>
              <Link
                className="view-li"
                to="/eventinfo"
                state={(event = { event })}
              >
                view more
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEv;
