import React from "react";
import './TopicItem.css';

function TopicItem(props) {
  return (
    <div className="topic-item">
      <div>
        <strong>{props.name}</strong>
        <p>{props.des}</p>
      </div>

    </div>
  );
}
export default TopicItem;