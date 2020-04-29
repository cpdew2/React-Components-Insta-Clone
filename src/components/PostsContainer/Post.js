// You will add code in this file
import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";
const [like, setLike] =useState(props.post.like)
console.log(props);

const [isLiked, setIsLiked] = useState(props.post)

const increasedLikes =() => {
  if (isLiked === true) {
    setIsLiked(like -1);
  }else{
    setIsLiked(like +1);
  }
  }

// pass props in this file to
const Post = props => {
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
      setLike = {setLike}/>
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;
