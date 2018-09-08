import React from 'react';

function CountryData(props) {
  const filteredByList = [
    'population',
    'pop2050',
    'popgrowth',
    'urban',
    'life',
    'poverty',
    'gdp',
    'gdp2050',
    'gdpgrowth',
    'energy',
    'debt',
    'currency'
  ];
  const countryMapFiltered = Object.keys(props.nation) // filters by key and returns new obj
    .filter(key => filteredByList.includes(key))
    .reduce((obj, key) => {
      obj[key] = props.nation[key] || 'N/A';
      return obj;
    }, {});
  const countryEntries = Object.entries(countryMapFiltered).map((val, index) => (
    <li key={index}>
      <span>{val[0]}</span>
      <span>{val[1]}</span>
    </li>
  ));
  console.log(Object.entries(countryMapFiltered));
  return (
    <div className="country-detail">
      <h4> {props.nation.name} </h4>
      <div className="country-data">
        <div className="country-list">
          <ul className="country-entries">{countryEntries}</ul>
          <div className="country-map">
            <img src={require(`../.././images/maps/${props.nation.map}`)} alt="Map" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryData;
