import React from "react";
import "./postup.css";
import poi from "../../final project design we run/gal8.jpg";
import { useDispatch, useSelector } from "react-redux";
import { postDel } from "../../JS/userSlice/postSlice";
import ModalPost from "../modalpost/ModalPost";
import AddComment from "../pubcomment/AddComment";
import CommentLIst from "../pubcomment/CommentLIst";

const PostUp = ({ post }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleDel = () => {
    dispatch(postDel(post._id));
  };
  return (
    <div>
      <div className="post-body-3">
        <div className="cl-post-3">
          <div className="post-bodyy">
            <div className="post-body-header">
              <div className="user-post">
                <img
                  src={`http://localhost:5000${post?.creator?.photo}`}
                  alt=""
                />
                <span>{post?.creator?.name}</span>
              </div>
              {post?.creator?._id === user?._id ? (
                <div className="option-post">
                  <button onClick={handleDel}>
                    <i class="fas fa-trash"></i>
                  </button>
                  <ModalPost postId={post?._id} />
                </div>
              ) : null}
            </div>
            <div className="pub-body">
              <p>{post?.content}</p>
            </div>
          </div>
          <div className="post-body-2">
            <AddComment postId={post?._id} userid={user?._id} />
            <CommentLIst
              comments={post?.comments}
              postId={post?._id}
              userid={user?._id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostUp;
