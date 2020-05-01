// You will add code in this file
import React, { useState }from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";
const Post = props => {
console.log(props);

const [like, setLike] =useState(props.dataItems.likes);
const [isLike, setIsLiked] = useState(false);
const onToggle =() => {
  setIsLiked(!isLike)
  if (isLike ===true) {
    setLike(like -1);
  } else {
    setIsLiked(like + 1)
  }
  };
// pass props in this file tost
  // set up state for the likes

  return (
    <div className="post-border">
      <PostHeader
        username={props.dataItems.username}
        thumbnailUrl={
          props.dataItems.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.dataItems.imageUrl}
        />
      </div>
      <LikeSection like = {like}/>
      
      <CommentSection
        postId={props.dataItems.imageUrl}
        comments={props.dataItems.comments}
      />
    </div>
  );
};

export default Post;
