import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postGet } from "../../JS/userSlice/postSlice";
import PostUp from "./PostUp";

const PostList = ({ ping, setping }) => {
  const postss = useSelector((state) => state.post.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postGet());
  }, []);
  return (
    <div>
      {postss?.map((el) => (
        <PostUp post={el} ping={ping} setping={setping} />
      ))}
    </div>
  );
};

export default PostList;
