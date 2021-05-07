import React, {useContext} from 'react';
import CountryFilterContext from '../context/countryFilter-context';

function CountryFilter() {
  const contextValue = useContext(CountryFilterContext);
  return (
        <div className="e-top">
        <div className="e-top-title d-flex js-btw align-bl">
          <h3>Where in the world</h3>
          <button onClick={contextValue.toggleDarkMode} className="btn-darkmode btn-outline-secondary">
            <i class="far fa-moon"></i>
            <span>Dark mode</span>
          </button>
        </div>

        <div className="e-search d-flex js-btw align-bl">
          <div className="e-search-bar">
            <i class="fas fa-search"></i>
            <input onChange={contextValue.handleSearchChange} type="text" placeholder="Search for a country" />
          </div>
          <select onChange={contextValue.handleRegionChange} name="region-sel" id="region-sel">
            <option value="default">Filter by region</option>
            <option value="africa">Afica</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
    
  );
}
export default CountryFilter;
