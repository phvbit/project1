import React from "react";
import './PostItem.css';
// import 

function PostItem(props) {
  var id;
  function ImgOpMouseEnter(event) {
    id = `${event.target.id}-info`
    clearTimeout(hiddenMouseInfo);
    document.getElementById(id).style.visibility = "visible";
  }
  var hiddenMouseInfo;
  function ImgOpMouseLeave() {
    hiddenMouseInfo = setTimeout(function() {
      document.getElementById(id).style.visibility = "hidden";
    }, 200);
  }
  function AccInfoMouseEnter() {
    clearTimeout(hiddenMouseInfo);
    document.getElementById(id).style.visibility = "visible";
  }
  function AccInfoMouseLeave() {
    document.getElementById(id).style.visibility = "hidden";
  }
  function HandleClickImg(event) {
    window.open(event.target.src);    
  }

  return (
    <div className="post-item d-flex">
      <div className="post-l" id="post-l">
        <img id={props.id} onMouseEnter={ImgOpMouseEnter} onMouseLeave={ImgOpMouseLeave} src={props.opImg} alt="profile picture" />
        <div id={`${props.id}-info`}  onMouseEnter={AccInfoMouseEnter} onMouseLeave={AccInfoMouseLeave} className="acc-info">
          <div className="top-info d-flex js-btw">
            <div className="top-info-l">
              <img src={props.opImg} alt="Photo" /><br />
              <strong>{props.name}</strong>
              <p>@{props.username}</p>
            </div>
            <div>
              <button className="btn-if-follow"></button>
            </div>
          </div>
          <p>{props.intro}</p>
          <p>Not followed by anyone you're following</p>
        </div>
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
        <img onClick={HandleClickImg} src={props.postImg} alt="Post image" />
        <div className="react-bar">
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