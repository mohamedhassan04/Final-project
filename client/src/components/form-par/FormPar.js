import React, { useState } from "react";
import "./FormPar.css";
import slogan5 from "../../final project design we run/slogan5.png";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { eventUpdtpart } from "../../JS/userSlice/eventSlice";

const FormPar = ({ ping, setping }) => {
  const params = useParams();
  console.log(params.id);
  const [participant, setparticipant] = useState({});
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event.event);
  const eve = events?.filter((el) => el._id == params.id);
  console.log(eve);
  return (
    <div>
      <div className="input-par">
        <div className="gl-form">
          <form className="par-form">
            <div className="title-par">
              <h1>welcome to space of participant</h1>
            </div>
            <div className="frm-input">
              <label for="fname">First name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                onChange={(e) =>
                  setparticipant({ ...participant, name: e.target.value })
                }
              />
              <label for="fname">Last name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                onChange={(e) =>
                  setparticipant({ ...participant, lastname: e.target.value })
                }
              />
              <label for="fname">Adress</label>
              <input
                type="text"
                id="fname"
                name="fname"
                onChange={(e) =>
                  setparticipant({ ...participant, adresse: e.target.value })
                }
              />
              <label for="fname">Select distance</label>
              <select
                name="distance"
                onChange={(e) =>
                  setparticipant({ ...participant, distance: e.target.value })
                }
              >
                {eve?.map((el) =>
                  el.distance.map((elem) => <option>{elem.value}</option>)
                )}
              </select>
              <label for="fname">Club</label>
              <input
                type="text"
                id="fname"
                name="fname"
                onChange={(e) =>
                  setparticipant({ ...participant, Club: e.target.value })
                }
              />
              <label for="fname">C.I.N Number</label>
              <input
                type="text"
                id="fname"
                name="fname"
                onChange={(e) =>
                  setparticipant({ ...participant, CIN: e.target.value })
                }
              />
            </div>
            <div className="btn-add-par">
              <button
                className="add-event-par"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(eventUpdtpart({ id: params.id, participant }));
                  setping(!ping);
                }}
              >
                Register for event
              </button>
            </div>
          </form>
          <div className="img-slog-par">
            <img src={slogan5} style={{ width: 320, height: 520 }} alt="slo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPar;
