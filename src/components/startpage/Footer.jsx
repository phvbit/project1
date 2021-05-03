import React from "react";
import './Footer.css';

function Footer(props) {
  return (
    <a className="a-home" href={props.href}>{props.name}</a>
  );
}
export default Footer;