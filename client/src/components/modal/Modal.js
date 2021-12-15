import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { imageAdd } from "../../JS/userSlice/ImageSlice";
import "./modal.css";

const Modal = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const toggleModal = () => {
    setModal(!modal);
  };

  const [selectimages, setSelectimages] = useState({ url: "" });
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    const { data } = await axios.post(
      "http://localhost:5000/addphoto/uploads",
      bodyFormData
    );
    console.log(data);
    setSelectimages({ ...selectimages, url: data });
  };
  return (
    <div>
      <button onClick={toggleModal} className="btn-modal">
        Add your image
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2> Hello add your image</h2>
            <input type="file" name="file" onChange={uploadFileHandler} />
            <button
              className="save-btn"
              onClick={() => dispatch(imageAdd(selectimages))}
            >
              <i class="fas fa-save"></i> Save
            </button>
            <button className="close-btn" onClick={toggleModal}>
              <i class="far fa-times-circle"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
