import React, {Component} from 'react';

class Maps extends Component {

  clearOverlay = () => {
    document.getElementById("overlay").setAttribute('style', 'opacity: 0;');
  }

  render() {
    return (
      <div className="inner-maps">
        <div id="overlay" onClick={this.clearOverlay}>
        </div>
        <div>
          <iframe
            className="maps"
            frameBorder="0"
            src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyBEERsCbyJvSuyQFpq2IcnunlrO-m-qhc0&q=" + this.props.map} allowFullScreen>
          </iframe>
        </div>
      </div>
    )
  }
}

export default Maps;
