import React from 'react';
import './NewFeed.css';
import Post from './Post';

function NewFeed() {
  return (
    <div id="new-feed" className="new-feed">
        <div className="fixed-h">
          <div className="home-new-feed d-flex js-btw align-bl">
            <div><h3>Home</h3></div>
            <div><i class="far fa-star"></i></div>
          </div>
        </div>
        <Post />
    </div>

  );
}
export default NewFeed;