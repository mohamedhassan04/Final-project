import React from "react";
import { useSelector } from "react-redux";
import "./profil.css";
import { Link } from "react-router-dom";
import ModalUp from "./modalupdate/ModalUp";
import { useNavigate } from "react-router-dom";

const Profil = ({ ping, setping }) => {
  const user = useSelector((state) => state.user.user);
  const evento = useSelector((state) => state.event.event);
  const navigate = useNavigate();

  return (
    <div>
      <div className="profil-gl">
        <div className="body-profil">
          <section className="section-profile">
            <div className="container">
              <div className="card-profile">
                <div className="content-profile">
                  <div className="img-profile">
                    <img
                      src={`http://localhost:5000${user?.photo}`}
                      alt="pic"
                    />
                  </div>
                  <div className="contente-profile">
                    <h3>
                      hello Mr/Mme {user ? user.name : <h3>loading ... </h3>}
                      <br /> <span>Statut:{user?.statut} </span> <br />
                      <span>City:{user?.city} </span> <br />
                      <span>Birthday date:{user?.birthdaydate}</span>
                    </h3>
                  </div>
                </div>
                <ul className="sci-profile">
                  <li style={{ "--i": "1" }}>
                    <i class="fab fa-facebook" aria-hidden="true"></i>
                  </li>
                  <li style={{ "--i": "2" }}>
                    <i class="fab fa-twitter" aria-hidden="true"></i>
                  </li>
                  <li style={{ "--i": "3" }}>
                    <i class="fab fa-instagram" aria-hidden="true"></i>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div className="btn-profile">
            <Link to="/formorg">
              <button>Add your event</button>
            </Link>
            {user?.isAdmin ? (
              <button
                onClick={() => {
                  navigate("/admin");
                }}
                className="log-drop"
              >
                Dashboard
              </button>
            ) : null}
            <div className="modal-btn-profile">
              <ModalUp userId={user?._id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
