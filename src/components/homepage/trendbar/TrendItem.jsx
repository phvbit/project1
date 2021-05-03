import React from "react";
import './TrendItem.css';

function TrendItem(props) {
  return (
    <div className="trend-item">
      <div>
        <p className="text-muted">{props.area}</p>
        <strong>{props.trend}</strong>
        <p className="text-muted">{props.tweets} Tweets</p>
      </div>
    </div>
  );
}
export default TrendItem;