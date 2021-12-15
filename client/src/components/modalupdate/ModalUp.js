import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userUpdt } from "../../JS/userSlice/userSlice";
import "./modalup.css";

const ModalUp = ({ userId, ping, setping }) => {
  const dispatch = useDispatch();
  const [modalup, setModalUp] = useState(false);

  const toggleModalup = () => {
    setModalUp(!modalup);
  };
  const [updated, setUpdated] = useState({});

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    const { data } = await axios.post(
      "http://localhost:5000/addphoto/uploads",
      bodyFormData
    );
    console.log(data);
    setUpdated({ ...updated, photo: data });
  };

  const handleEdit = () => {
    dispatch(userUpdt({ id: userId, updated }));
  };

  return (
    <div>
      <button onClick={toggleModalup} className="btn-modal-up">
        Update your profile
      </button>
      {modalup && (
        <div className="modal">
          <div onClick={toggleModalup} className="overlay-up"></div>
          <div className="modal-content-up">
            <h2> Hello update your information</h2>
            <div className="input-up">
              <span>First Name</span>
              <input
                type="text"
                name="text"
                onChange={(e) => {
                  setUpdated({ ...updated, name: e.target.value });
                }}
              />
              <span>Birthday date</span>
              <input
                type="date"
                name="text"
                onChange={(e) => {
                  setUpdated({ ...updated, birthdaydate: e.target.value });
                }}
              />
              <span>City</span>
              <input
                type="text"
                name="text"
                onChange={(e) => {
                  setUpdated({ ...updated, city: e.target.value });
                }}
              />
              <span>Statut</span>
              <input
                type="text"
                name="text"
                onChange={(e) => {
                  setUpdated({ ...updated, statut: e.target.value });
                }}
              />
            </div>
            <input
              className="form-img-add"
              name="file"
              type="file"
              onChange={uploadFileHandler}
            />
            <button
              className="save-btn"
              onClick={() => {
                handleEdit();
                toggleModalup();
              }}
            >
              <i class="fas fa-save"></i> Save Changes
            </button>
            <button className="close-btn" onClick={toggleModalup}>
              <i class="far fa-times-circle"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalUp;
