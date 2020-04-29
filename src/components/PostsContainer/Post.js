// You will add code in this file
import React, { useState }from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";
const Posts = props => {

const [like, setLike] =useState(props.post.like);
const [isLike, setIsLiked] = useState(false);
const onToggle =() => {
  setIsLiked(!isLike)
  if (isLike ===true) {
    setLike(like -1);
  } else {
    setIsLiked(like + 1)
  }
  }
// pass props in this file to
  // set up state for the likes

  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection like = {like}
      onToggle = {onToggle}/>
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;
