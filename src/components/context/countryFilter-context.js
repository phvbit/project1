import React from 'react';

const countryFilterContext = React.createContext({toggleDarkMode: () => {}, handleSearchChange: () => {}, handleRegionChange: () => {}});

export default countryFilterContext;