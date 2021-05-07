import React from "react";

const countryContext = React.createContext({listCountry: [], handleOnClickCard: () => {}, addCommas: () => {}});

export default countryContext;