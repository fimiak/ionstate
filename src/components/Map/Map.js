import React, { Component } from 'react/react.js';

class Map extends Component {
    render() {
        return(
            <div className="inner-home-map">
                <iframe
                    className="maps"
                    frameBorder="0"
                    src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyBEERsCbyJvSuyQFpq2IcnunlrO-m-qhc0&q=united+states"} allowFullScreen>
                </iframe>
            </div>
        )
    }
}

export default Map;