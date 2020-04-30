// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import "./Comment.css";
import Comment from "./Comment"

const CommentSection = props => {
  const [comment] = useState(props.comments)
  // Add state for the comments

  return (

    <div> 
      
      {comment.map ((comments, index) => <Comment key= {index} comments={comments}/>)} 
                   
      
      {/* map through the comments data and return the Comment component */}
      <CommentInput /> </div>
      
      
      )}
    

export default CommentSection;
