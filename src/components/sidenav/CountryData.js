import React from 'react';

function CountryData() {
  return (
    <div className="country-detail">
      <h4>{this.props.nation.name}</h4>
      <div className="country-data">
        <div className="country-map">
          <img src={require(`../.././images/maps/${this.props.nation.map}`)} alt="Map" />
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
            <li>{this.props.nation.population}</li>
            <li>{this.props.nation.pop2050}</li>
            <li>{this.props.nation.popgrowth}</li>
            <li>{this.props.nation.urban}</li>
            <li>{this.props.nation.life}</li>
            <li>{this.props.nation.poverty}</li>
            <li>{this.props.nation.gdp}</li>
            <li>{this.props.nation.gdp2050}</li>
            <li>{this.props.nation.gdpgrowth}</li>
            <li>{this.props.nation.energy}</li>
            <li>{this.props.nation.debt}</li>
            <li>{this.props.nation.currency}</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default CountryData;
