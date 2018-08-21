import React from 'react';
import summitImg from '../.././images/summit.jpg';
import g7Img from '../.././images/g72018.jpg';
import natoImg from '../.././images/nato2018.jpg';
import bricsImg from '../.././images/brics2018.jpg';

function Summit() {
  return (
    <div>
      <h2 className="item-header">Previous Summits</h2>
      <ul className="summits-list">
        <li>
          <a href="https://gadebate.un.org/en">
            <img src={summitImg} />
            <span>UNGA | Sept 2018</span>
          </a>
        </li>
        <li>
          <a href="http://www.brics2018.org.za/">
            <img src={bricsImg} />
            <span>BRICS | July 2018</span>
          </a>
        </li>
        <li>
          <a href="https://www.nato.int/cps/en/natohq/news_155085.htm">
            <img src={natoImg} />
            <span>NATO | July 2018</span>
          </a>
        </li>
        <li>
          <a href="https://g7.gc.ca/en/">
            <img src={g7Img} />
            <span>G7 | June 2018</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Summit;
