import React from 'react';

function Map() {
  return (
    <div className="map">
      <div className="inner-map-list">
        <h3>Upcoming Maps</h3>
        <ul>
          <li>Aug 12 - Paris</li>
          <li>Sep 03 - Moscow</li>
          <li>Nov 23 - Tokyo</li>
          <li>Nov 23 - Buenos Aires</li>
          <li>Nov 23 - Nadi, Fiji</li>
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
