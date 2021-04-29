import React from "react";
import './Post.css';
import PostItem from "./PostItem";
import postItems from "./postItems";

function Post() {
  return (
    <div className="post">
      {postItems.map(item => (
        <PostItem
        key={item.id}
        opImg={item.opImg}
        name={item.name}
        username={item.username}
        post={item.post}
        postImg={item.postImg}
        />
      ))}
    </div>
  );
}
export default Post;