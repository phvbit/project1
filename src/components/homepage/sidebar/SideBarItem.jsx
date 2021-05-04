import React from "react";
import './SideBarItem.css';

function SideBarItem(props) {
  return (
    <a href={props.href}>
      <i className={props.iconClass}></i>
      <strong>{props.iconName}</strong>
    </a>
  );
}
export default SideBarItem;