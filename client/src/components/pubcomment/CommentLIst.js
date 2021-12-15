import React from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";

const CommentLIst = ({ comments, postId, userid }) => {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      {comments?.map((el) => (
        <Comment comment={el} postId={postId} userid={userid} user={user} />
      ))}
    </div>
  );
};

export default CommentLIst;
