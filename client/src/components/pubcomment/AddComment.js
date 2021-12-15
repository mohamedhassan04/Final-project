import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import poi from "../../final project design we run/gal8.jpg";
import { commentAdd } from "../../JS/userSlice/postSlice";
import "./addcomment.css";

const AddComment = ({ userid, postId, ping, setping }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState({});

  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <div className="input-post-bg-2">
        <img src={`http://localhost:5000${user?.photo}`} alt="" />
        <input
          type="text"
          placeholder="New comment..."
          onChange={(e) => {
            setComment({ ...comment, text: e.target.value });
          }}
        />
        <button
          onClick={() => {
            dispatch(
              commentAdd({ postId: postId, userid: userid, post: comment })
            );
          }}
        >
          Comment
        </button>
      </div>
    </div>
  );
};

export default AddComment;
