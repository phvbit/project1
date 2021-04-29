import React from "react";
import TrendItem from "./TrendItem";
import trendItems from "./trendItems";
import SearchResult from "./SearchResult";
import './TrendBar.css';
import postItems from "../newfeed/postItems";
import topicListItems from "./topicListItems";
import TopicItem from "./TopicItem";

function TrendBar() {
  function HandleSearchFocus() {
    document.getElementById("search-result").classList.toggle("show");
    document.querySelector(".search-bar").style.borderColor = "#1DA1F2";
    document.querySelector(".search-bar").style.color = "#1DA1F2";
    document.querySelector(".search-bar").style.backgroundColor = "#fff";

  }
  function HandleSearchFocusOut() {
    document.getElementById("search-result").classList.toggle("show");
    document.querySelector(".search-bar").style.borderColor = "#EBEEF0";
    document.querySelector(".search-bar").style.color = "#6c757d";
    document.querySelector(".search-bar").style.backgroundColor = "#EBEEF0";

  }
  function HandleSearchInputChange(event) {
    if(event.target.value === "") {
      document.getElementById("search-for").innerHTML = "Try searching for people, topics, or keywords";
    }
    else
    document.getElementById("search-for").innerHTML = "Search for " + "\"" + event.target.value + "\"";
  }

  return (
    <div className="trend-bar">
      {/* Search Bar */}
      <div>
        <div className="search-bar d-flex align-bl">
          <i class=" fas fa-search"></i>
          <input onChange={HandleSearchInputChange} onFocus={HandleSearchFocus} onBlur={HandleSearchFocusOut} className="" type="text" name="" id="search-bar" placeholder="Search Twitter" />
        </div>
        <SearchResult />

      </div>
      {/* Trend Bar */}
      <div className="trend-area">
        <ul>
          <li className="d-flex align-bl js-btw">
            <h3>Trends for you</h3>
            <i style={{ color: "#1DA1F2" }} class="fas fa-cog"></i>
          </li>
          {trendItems.map(item => (
            <li className="d-flex js-btw">
              <TrendItem
                key={item.id}
                area={item.area}
                trend={item.trend}
                tweets={item.tweets}
              />
              <i class="fas fa-ellipsis-h"></i>
            </li>

          ))}
          <li><p style={{ color: "#1DA1F2" }}>Show more</p></li>
        </ul>
      </div>
      {/* Topics */}
      <div className="trend-area">
        <ul>
          <li>
            <h3>Topics for you</h3>
          </li>
          {topicListItems.map(item => (
            <li className="d-flex js-btw">
              <TopicItem
                key={item.id}
                name={item.name}
                des={item.des}
              />
              <button className="btn w-80px btn-outline-twitter"><strong>Follow</strong></button>

            </li>

          ))}
          <li><p style={{ color: "#1DA1F2" }}>Show more</p></li>
        </ul>
      </div>

    </div>
  );
}
export default TrendBar;