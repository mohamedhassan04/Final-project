import React from "react";
import { useDispatch, useSelector } from "react-redux";
import poi from "../../final project design we run/gal8.jpg";
import { commentDelete } from "../../JS/userSlice/postSlice";
import "./comment.css";

const Comment = ({ comment, userid, user, postId }) => {
  const dispatch = useDispatch();
  const handledelcom = () => {
    dispatch(
      commentDelete({ postId: postId, userid: userid, commentId: comment?._id })
    );
  };

  return (
    <div>
      <div className="input-post-3">
        <img src={`http://localhost:5000${comment?.creator?.photo}`} alt="" />
        <div className="comment-post">
          <span>{comment.user}</span>

          <p>{comment.text}</p>
        </div>
        {comment?.creator?._id === user?._id || user?.isAdmin ? (
          <div className="btn-sup-com">
            <button className="btn-suupr" onClick={handledelcom}>
              <i class="fas fa-trash"></i>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Comment;
