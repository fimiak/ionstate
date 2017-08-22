import React, {Component} from 'react';
import data from '.././data/data';
import Footer from './Footer';
import Featured from './featured/Featured';
import whitehouse from '.././images/whitehouse.svg';


/********************************************************
 ********************************************************
 ********************************************************
** Make the home page modern and colorful.
** Add daily news to home -> lead into leader pages.
** Add content to Maps/Schedules category.
** Create a recent polling category.
** Break up data.json into a sheet for each person.
** New data sheet includes schedule info.
** Node Server to store news articles, polls.
********************************************************
********************************************************
********************************************************/


class Home extends Component {
  render() {
    function random() {
      let x = Math.floor(Math.random() * 27);
      return x
    }
    let selection = data.data[random()];
    return (
      <div className="home">
        <div className="inner-home">
          <h1>PRESIDENTPRIME</h1>
          <img className="home-image" src={whitehouse} alt='The White House' />
        </div>
        <Featured selected={selection} />
        <div className="footer">
          <Footer />
        </div>
      </div>
    )
  }
}

export default Home;
