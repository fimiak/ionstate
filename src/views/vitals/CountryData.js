import React from 'react';

function CountryData(props) {
  return (
    <div className="country-detail">
      <h4>{props.nation.name}</h4>
      <div className="country-data">
        <div className="country-map">
          <img src={require(`../.././images/maps/${props.nation.map}`)} alt="Map" />
        </div>
        <div className="country-list">
          <ul>
            <li>Population</li>
            <li>Population in 2050</li>
            <li>Population Growth Rate</li>
            <li>Urbanization Rate</li>
            <li>Life Expectancy</li>
            <li>Poverty Rate</li>
            <li>GDP Nominal / $ millions</li>
            <li>GDP in 2050</li>
            <li>GDP Growth Rate</li>
            <li>Renewable Energy</li>
            <li>Sovereign Debt</li>
            <li>Currency</li>
          </ul>
          <ul>
            <li>{props.nation.population}</li>
            <li>{props.nation.pop2050}</li>
            <li>{props.nation.popgrowth}</li>
            <li>{props.nation.urban}</li>
            <li>{props.nation.life}</li>
            <li>{props.nation.poverty}</li>
            <li>{props.nation.gdp}</li>
            <li>{props.nation.gdp2050}</li>
            <li>{props.nation.gdpgrowth}</li>
            <li>{props.nation.energy}</li>
            <li>{props.nation.debt}</li>
            <li>{props.nation.currency}</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default CountryData;
