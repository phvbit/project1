import React from 'react';
import './NewFeed.css';
import PostItem from "./PostItem";
import postItems from "./postItems";

function NewFeed() {
  return (
    <div id="new-feed" className="new-feed">
      <div className="fixed-h">
        <div className="top-nf d-flex js-btw align-bl">
          <div><h3>Home</h3></div>
          <div><i class="far fa-star"></i></div>
        </div>
      </div>
      {/* POST */}
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
    </div>

  );
}
export default NewFeed;