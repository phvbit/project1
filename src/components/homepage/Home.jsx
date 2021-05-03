import React from "react";
import SideBar from "./sidebar/SideBar";
import NewFeed from "./newfeed/NewFeed";
import TrendBar from "./trendbar/TrendBar";
import './Home.css';

function Home() {
  return (
    <div className="home d-flex js-center">
      <SideBar />
      <NewFeed />
      <TrendBar />
    </div>
  );
}
export default Home;