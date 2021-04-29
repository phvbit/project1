import React, { useState, useEffect } from "react";
import './Explore.css';
import CountryCard from "./CountryCard";
import axios from "axios";
import SideBar from "../homepage/sidebar/SideBar";
import TrendBar from "../homepage/trendbar/TrendBar";

function Explore() {
  const [api, setApi] = useState("https://restcountries.eu/rest/v2/all");
  useEffect(() => {
    console.log(api);
  })
  function HandleSearchChange(event) {
    const searchValue = event.target.value;
    if (searchValue === "") {
      setApi("https://restcountries.eu/rest/v2/all");
    }
    else {
      setApi(`https://restcountries.eu/rest/v2/name/${searchValue}`);
    }
  }
  function HandleRegionChange(event) {
    const regionValue = event.target.value;
    if(regionValue === "default") {
      setApi("https://restcountries.eu/rest/v2/all");
    }
    else {
      setApi(`https://restcountries.eu/rest/v2/region/${regionValue}`);
    }


  }
  const [listCountry, setListCountry] = useState([]);
  useEffect(() => {
    axios.get(api)
      .then((res) => {
        setListCountry(res.data);
      }).catch((err) => {
        console.log(err);
        alert("ERROR.")
      })
  }, [api])

  return (
    <div className="explore d-flex js-center">
      <SideBar />
      <div className="explore-area">
        <div className="explore-top-fixed">
          <div className="explore-top d-flex js-btw align-bl">
            <h3>Where in the world</h3>
            <div>
              <i class="far fa-moon"></i>
              <span>Dark mode</span>
            </div>
          </div>
          <div className="explore-search d-flex js-btw align-bl">
            <div className="explore-search-bar">
              <i class="fas fa-search"></i>
              <input onChange={HandleSearchChange} type="text" placeholder="Search for a country" />
            </div>
            <select onChange={HandleRegionChange} name="region-sel" id="region-sel">
              <option value="default">Filter by region</option>
              <option value="africa">Afica</option>
              <option value="americas">Americas</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>

          </div>

        </div>
        <div className="country-area">
          {listCountry.map((country) => (
            <CountryCard
              key={country.alpha3Code}
              flag={country.flag}
              name={country.name}
              pop={country.population}
              reg={country.region}
              cap={country.capital}
            />
          ))}
        </div>
      </div>
      <TrendBar />

    </div>

  );
}
export default Explore;