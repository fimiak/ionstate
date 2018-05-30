import React from 'react';

function Map() {
  return (
    <div className="map">
      <div className="inner-map-list">
        <ul>
          <li>Jun 01 - Donald Trump - Washington DC</li>
          <li>Jul 20 - London</li>
          <li>Aug 12 - Paris</li>
          <li>Sep 03 - Moscow</li>
          <li>Nov 23 - Tokyo</li>
        </ul>
      </div>
      <div className="inner-home-map">
        <iframe
          className="maps"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBEERsCbyJvSuyQFpq2IcnunlrO-m-qhc0&q=united+states"
          title="map"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default Map;
