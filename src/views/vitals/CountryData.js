import React from 'react';

function CountryData(props) {
  const cE = Object.entries(props.nation);
  const cM = new Map(cE);
  const cK = [...cM.keys()];
  const cV = [...cM.values()];
  let cVFiltered = [];
  let cKFilterNum = [];
  cV.map((val, index) => typeof val !== 'object' ? cVFiltered.push(val) : cKFilterNum.push(index)); 
  // If not object, add to cvFiltered
  // If object, add index to CKFiltered to be removed
  // [ckFilterNum, ...cK];
  const cKList = cK.map(val => <li>{val}</li>);
  const cVList = cVFiltered.map(val => <li>{val}</li>);
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
    'currency'];
  console.log(cVFiltered);
  // console.log(cKFiltered);
  return (
    <div className="country-detail">
      <h4>{props.nation.name}</h4>
      <div className="country-data">
        <div className="country-map">
          <img src={require(`../.././images/maps/${props.nation.map}`)} alt="Map" />
        </div>
        <div className="country-list">
          <ul>
            <li>{props.nation.population}</li>
            <li>{props.nation.pop2050}</li>
            <li>{props.nation.popgrowth}</li>
            <li>{props.nation.urban}</li>
            <li>{props.nation.life}</li>
            <li>{props.nation.poverty}</li>
            <li>{props.nation.gdp}</li>
            <li>{props.nation.gdp2050 || 'N/A'}</li>
            <li>{props.nation.gdpgrowth}</li>
            <li>{props.nation.energy}</li>
            <li>{props.nation.debt}</li>
            <li>{props.nation.currency}</li>
          </ul>
          <ul>{cKList}</ul>
          <ul>{cVList}</ul>
        </div>

      </div>
    </div>
  );
}

export default CountryData;
