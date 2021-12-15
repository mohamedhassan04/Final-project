import React, { useEffect, useState } from "react";
import "./post.css";
import poi from "../../final project design we run/gal8.jpg";
import { useDispatch, useSelector } from "react-redux";
import { postAdd } from "../../JS/userSlice/postSlice";
import PostList from "./PostList";

const Post = ({ ping, setping }) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    content: "",
    creator: "",
  });

  useEffect(() => {
    setPost({ ...post, creator: user?._id });
  }, [post.content]);

  const handlepost = (e) => {
    e.preventDefault();
    dispatch(postAdd(post));
  };

  return (
    <div>
      <div className="post-gl">
        <div className="post-body">
          <div className="cl-post">
            <div className="input-post-bg">
              <img src={`http://localhost:5000${user?.photo}`} alt="" />

              <input
                type="text"
                placeholder="what's new ? "
                onChange={(e) => {
                  setPost({ ...post, content: e.target.value });
                }}
              />

              <button onClick={handlepost}>Post</button>
            </div>
            <div className="input-post-2"></div>
          </div>
        </div>
        <PostList />
      </div>
    </div>
  );
};

export default Post;
