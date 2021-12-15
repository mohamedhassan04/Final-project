import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postUpdt } from "../../JS/userSlice/postSlice";
import "./modalpost.css";

const ModalPost = ({ postId }) => {
  const [modalpost, setModalpost] = useState(false);
  const dispatch = useDispatch();
  const toggleModalpost = () => {
    setModalpost(!modalpost);
  };

  const [updatedpost, setUpdatedpost] = useState({});

  const handleEditpost = () => {
    dispatch(postUpdt({ id: postId, updatedpost }));
  };
  return (
    <div>
      <div className="btn-modal-post">
        <button onClick={toggleModalpost}>
          <i class="fas fa-edit"></i>
        </button>
      </div>
      {modalpost && (
        <div className="modal-post">
          <div className="modal-content-post">
            <h2> Hello update content</h2>
            <span>Content</span>
            <input
              type="text"
              name="text"
              onChange={(e) => {
                setUpdatedpost({ ...updatedpost, content: e.target.value });
              }}
            />
            <button
              className="save-btn"
              onClick={() => {
                handleEditpost();
                toggleModalpost();
              }}
            >
              <i class="fas fa-save"></i> Save
            </button>
            <button className="close-btn" onClick={toggleModalpost}>
              <i class="far fa-times-circle"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalPost;
