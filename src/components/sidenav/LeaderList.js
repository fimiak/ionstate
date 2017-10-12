import React, { Component } from 'react/react.js';
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

    componentWillMount() {
        this.listItems();        
    }

    listItems() {
        let listItems = this.props.country.map((country) =>
            <li key={country.order}>
                <NavLink to={country['country']} onClick={() => this.props.setNation(country['country'])}>
                    <img src={require('../.././images/thumbs/' + country.thumb)} alt="" />
                    <div className="copy" onClick={this.props.scrollTop}>{country.leader}<span>{country.name}</span></div>
                </NavLink>
            </li>
        );
        this.setState({
            page1: listItems.slice(0, 12),
            page2: listItems.slice(12, 24),
            page3: listItems.slice(24)
        })
    }

    componentWillReceiveProps() {
        this.listItems();
    }

    render() {
        return (
            <div id={this.props.id} className={'leader-list ' + (this.props.class || '')}>
                {  this.props.page === 1 && <ul>{this.state.page1}</ul>  }
                {  this.props.page === 2 && <ul>{this.state.page2}</ul>  }
                {  this.props.page === 3 && <ul>{this.state.page3}</ul>  }
            </div>
        )
    }
}

export default LeaderList;
