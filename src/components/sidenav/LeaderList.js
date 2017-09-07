import React, { Component } from 'react';
import NavLink from '../NavLink';

class LeaderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page1: [],
            page2: [],
            page3: []
        }
        this.listItems = this.listItems.bind(this);
    }

    listItems() {
        const listItems = this.props.country.map((country) =>
        <li key={country.order}>
            <NavLink to={country['country']} onClick={() => this.props.setNation(country['country'])}>
                <img src={require('../.././images/thumbs/' + country.thumb)} alt={country.leader} />
                <div className="copy">{country.leader}<span>{country.name}</span></div>
            </NavLink>
        </li>
        );
        const pageOneItems = listItems.slice(0, 12);
        const pageTwoItems = listItems.slice(12, 24);
        const pageThreeItems = listItems.slice(24);
        console.log(listItems);
        this.setState({
            page1: pageOneItems,
            page2: pageTwoItems,
            page3: pageThreeItems
        })
    }

    componentDidMount() {
        this.listItems();        
    }

    render() {
        return (
            <div>
                { this.props.page === 1 && <ul>{this.state.page1}</ul> }
                { this.props.page === 2 && <ul>{this.state.page2}</ul> }
                { this.props.page === 3 && <ul>{this.state.page3}</ul> }
            </div>
        )
    }
}

export default LeaderList;
