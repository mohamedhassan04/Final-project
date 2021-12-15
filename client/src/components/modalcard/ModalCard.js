import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { eventUpdt } from "../../JS/userSlice/eventSlice";
import "./modalcard.css";

const ModalCard = ({ eventId, ping, setping }) => {
  const dispatch = useDispatch();
  const [modalcard, setModalcard] = useState(false);

  const toggleModalcard = () => {
    setModalcard(!modalcard);
  };

  const [edit, setEdit] = useState({});

  const handleEdit = () => {
    dispatch(eventUpdt({ id: eventId, edit }));
  };
  return (
    <div>
      <button onClick={toggleModalcard} className="btn-modal-card">
        <i class="far fa-edit"></i>
      </button>
      {modalcard ? (
        <div className="modal-card">
          <div className="overlay-card"></div>
          <div className="modal-content-card">
            <h2> Hello update your information</h2>
            <div className="input-card">
              <span>Name</span>
              <input
                type="text"
                name="text"
                onChange={(e) => {
                  setEdit({ ...edit, name: e.target.value });
                }}
              />
              <span>Date</span>
              <input
                type="date"
                name="text"
                onChange={(e) => {
                  setEdit({ ...edit, date: e.target.value });
                }}
              />
              <span>Adress</span>
              <input
                type="text"
                name="text"
                onChange={(e) => {
                  setEdit({ ...edit, adress: e.target.value });
                }}
              />
              <span>Phone</span>
              <input
                type="text"
                name="text"
                onChange={(e) => {
                  setEdit({ ...edit, phone: e.target.value });
                }}
              />
              <span>Location</span>
              <input
                type="text"
                name="text"
                onChange={(e) => {
                  setEdit({ ...edit, location: e.target.value });
                }}
              />
              <span>Duration</span>
              <input
                type="text"
                name="text"
                onChange={(e) => {
                  setEdit({ ...edit, duration: e.target.value });
                }}
              />
              <span>Intelligence</span>
              <input
                type="text"
                name="text"
                onChange={(e) => {
                  setEdit({ ...edit, intelligence: e.target.value });
                }}
              />
              <span>Description</span>
              <input
                type="text"
                name="text"
                onChange={(e) => {
                  setEdit({ ...edit, description: e.target.value });
                }}
              />
            </div>
            <button
              className="save-btn"
              onClick={() => {
                handleEdit();
                toggleModalcard();
              }}
            >
              <i class="fas fa-save"></i> Save Changes
            </button>
            <button className="close-btn" onClick={toggleModalcard}>
              <i class="far fa-times-circle"></i>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ModalCard;
