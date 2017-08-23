import React from 'react';
import NavLink from '../NavLink';

function PageMenu(country, page) {
    let page1 = [];
    let page2 = [];
    let page3 = [];

    const listItems = country.country.map((country) =>
        <li key={country.order}>
            <NavLink to={country['country']}>
                <img src={require('../.././images/thumbs/' + country.thumb)} alt={country.leader} />
                <div className="copy">{country.leader}</div>
            </NavLink>
        </li>
    );

    listItems.forEach(function(item) {
        if (item.key < 9) {
            page1.push(item);
        } else if (item.key >= 9 && item.key < 18) {
            page2.push(item);
        } else {
            page3.push(item);
        }
    })

    return (
        <div>
            {
                country.page === 1 &&
                <ul>{page1}</ul>
            }
            {
                country.page === 2 &&
                <ul>{page2}</ul>
            }
            {
                country.page === 3 &&
                <ul>{page3}</ul>
            }
        </div>
    )
}


export default PageMenu;
