import React, { Component } from 'react';

class LeaderMap extends Component {
  clearOverlay() {
    document.getElementById('overlay').setAttribute('style', 'opacity: 0;');
  }

  render() {
    return (
      <div className="inner-maps">
        <div id="overlay" onClick={this.clearOverlay} />
        <div className="inner-leader-map">
          <iframe
            className="leadermap"
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBEERsCbyJvSuyQFpq2IcnunlrO-m-qhc0&q= ${
              this.props.map
            }`}
            title="map"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

export default LeaderMap;
