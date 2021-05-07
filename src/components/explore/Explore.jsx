import React, { useState, useEffect } from "react";
import axios from "axios";
import './Explore.css';
import SideBar from "../homepage/sidebar/SideBar";
import TrendBar from "../homepage/trendbar/TrendBar";
import CardDetail from "./cardDetail/CardDetail";
import NotFound from "./cardDetail/NotFound";

import ExploreCountry from './ExploreCountry';
import CountryFilterContext from "../context/countryFilter-context";
import CountryContext from "../context/country-context";

function Explore() {
  // Explore
  const [api, setApi] = useState("https://restcountries.eu/rest/v2/all");
  // Sort by name
  function HandleSearchChange(event) {
    const searchValue = event.target.value;
    if (searchValue === "") {
      setApi("https://restcountries.eu/rest/v2/all");
    }
    else {
      setApi(`https://restcountries.eu/rest/v2/name/${searchValue}`);
    }
  }
  // Sort by region
  function HandleRegionChange(event) {
    const regionValue = event.target.value;
    if (regionValue === "default") {
      setApi("https://restcountries.eu/rest/v2/all");
    }
    else {
      setApi(`https://restcountries.eu/rest/v2/region/${regionValue}`);
    }
  }
  // Not Found
  const [isNotFound, setIsNotFound] = useState(false);
  function HandleBackNotFound() {
    setIsNotFound(false);
  }

  // Get Countries by name API
  const [listCountry, setListCountry] = useState([]);
  useEffect(() => {
    axios.get(api)
      .then((res) => {
        setListCountry(res.data);
      }).catch((err) => {
        console.log(err);
        setIsNotFound(true);
        // alert("ERROR.");
      })
  }, [api])
  // Card Detail
  const [isCardClick, setCardClick] = useState(false);
  const [alphaCode, setAlphaCode] = useState("https://restcountries.eu/rest/v2/alpha/vnm");
  function HandleOnClickCard(event) {
    console.log("Click");
    setCardClick(true);
    const alpha3Code = event.currentTarget.id;
    setAlphaCode(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`);
  }
  // Close Detail Pop Up
  function HandleBackClick() {
    setCardClick(false);
  }
  // Border Country
  function HandleBorderClick(event) {
    setAlphaCode(`https://restcountries.eu/rest/v2/alpha/${event.target.innerHTML}`);
  }
  // Get Country by Alpha3Code API
  const [countryDetail, setCountryDetail] = useState({});
  useEffect(() => {
    axios.get(alphaCode)
      .then((res) => {
        setCountryDetail(res.data);
      }).catch((err) => {
        console.log(err);
        setIsNotFound(true);
        // alert("ERROR.");
      })
  }, [alphaCode])
  // Add comma to population
  function addCommas(pop) {
    return pop.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  // Dark Mode
  const [enableDarkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (enableDarkMode === true) {
      console.log("Dark mode on");
    }
    else {
      console.log("Light Mode on");
    }
  })
  function ToogleDarkMode() {
    setDarkMode(!enableDarkMode);
  }

  return (
    <div className="explore-page d-flex js-center">
      <SideBar />
      <div className="explore">
        <CountryContext.Provider value={{listCountry: listCountry, handleOnClickCard: HandleOnClickCard, addCommas: addCommas}}>
          <CountryFilterContext.Provider value={{ toggleDarkMode: ToogleDarkMode, handleSearchChange: HandleSearchChange, handleRegionChange: HandleRegionChange }}>
            <ExploreCountry />
          </CountryFilterContext.Provider>
        </CountryContext.Provider>
      </div>
      <TrendBar />
      {/* POPUP Detail */}
      {isCardClick && <CardDetail
        backClick={HandleBackClick}
        key={countryDetail.alpha3Code}
        flag={countryDetail.flag}
        name={countryDetail.name}
        nativeName={countryDetail.nativeName}
        pop={addCommas(countryDetail.population)}
        reg={countryDetail.region}
        subReg={countryDetail.subregion}
        cap={countryDetail.capital}

        domain={countryDetail.topLevelDomain}
        currencies={countryDetail.currencies.map((currency) => (currency.code)).join(", ")}
        languages={countryDetail.languages.map((language) => (language.name)).join(", ")}

        borderList={countryDetail.borders}
        borderClick={HandleBorderClick}
      />}
      {isNotFound && <NotFound backClick={HandleBackNotFound} />}
    </div>
  );
}
export default Explore;