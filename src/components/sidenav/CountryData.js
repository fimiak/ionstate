import React, { Component } from 'react';

class CountryData extends Component {
    render() {
        return (
            <div className="country-detail">
                <h4>{this.props.selected.name}</h4>
                <div className="country-data">
                    <div className="country-map">
                        <img src={require('../.././images/maps/' + this.props.selected['map']) } alt="Map" />
                    </div>
                    <div className="country-list">
                        <ul>
                            <li>Population</li>
                            <li>Population in 2050</li>
                            <li>Population Growth Rate</li>
                            <li>Urbanization Rate</li>
                            <li>Life Expectancy</li>
                            <li>Poverty Rate</li>
                            <li>Gross Domestic Product ($ millions)</li>
                            <li>GDP in 2050</li>
                            <li>GDP Growth Rate</li>
                            <li>Renewable Energy</li>
                            <li>Sovereign Debt</li>
                            <li>Currency</li>
                        </ul>
                        <ul>
                            <li>{this.props.selected.population}</li>
                            <li>{this.props.selected.pop2050}</li>
                            <li>{this.props.selected.popgrowth}</li>
                            <li>{this.props.selected.urban}</li>
                            <li>{this.props.selected.life}</li>
                            <li>{this.props.selected.poverty}</li>
                            <li>{this.props.selected.gdp}</li>
                            <li>{this.props.selected.gdp2050}</li>
                            <li>{this.props.selected.gdpgrowth}</li>
                            <li>{this.props.selected.energy}</li>
                            <li>{this.props.selected.debt}</li>
                            <li>{this.props.selected.currency}</li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

export default CountryData;