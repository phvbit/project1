import React, { useContext } from 'react';
import CountryCard from "./CountryCard";
import CoutryContext from "../context/country-context";
import CountryFilter from './CountryFilter';

function ExploreCountry() {
  const contextValue = useContext(CoutryContext);
  return (
    <React.Fragment>
      <CountryFilter />
      {/* Grid Countries */}
      <div className="e-country">
        {contextValue.listCountry.map((country) => (
          <CountryCard
            onClickHandle={contextValue.handleOnClickCard}
            id={country.alpha3Code}
            key={country.alpha2Code}
            flag={country.flag}
            name={country.name}
            pop={contextValue.addCommas(country.population)}
            reg={country.region}
            cap={country.capital}
            code={country.alpha3Code}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
export default ExploreCountry;