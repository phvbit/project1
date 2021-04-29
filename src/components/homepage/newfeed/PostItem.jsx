import React from "react";
import './PostItem.css';
// import 

function PostItem(props) {
  return (
    <div className="post-item d-flex">
      <div className="post-l">
        <img src={props.opImg} alt="profile picture" />
      </div>
      <div className="post-r">
        <div className="d-flex js-btw align-bl">
          <div>
            <strong>{props.name}</strong>
            <span>@{props.username}</span>
          </div>
          <span class="more fas fa-ellipsis-h"></span>
        </div>

        <p>{props.post}</p>
        <img src={props.postImg} alt="Post image" />
        <div className="grid-bar">
          <div className="react-item d-flex align-bl">
            <i class="d-flex align-bl js-center far fa-comment"></i>
            <span>23</span>
          </div>
          <div className="react-item d-flex align-bl">
            <i class="d-flex align-bl js-center fas fa-retweet"></i>
            <span>23</span>
          </div>
          <div className="react-item d-flex align-bl">
            <i class="d-flex align-bl js-center far fa-heart"></i>
            <span>11</span>
          </div>
          <div className="react-item d-flex align-bl">
            <i class="d-flex align-bl js-center far fa-share-square"></i>
          </div>

        </div>
      </div>
    </div>
  );
}
export default PostItem;