import React, {Component} from 'react';

class Maps extends Component {
  componentDidMount() {
  }

  clearOverlay = () => {
    document.getElementById("overlay").setAttribute('style', 'opacity: 0;');
  }

  render() {
    let place = '';
    switch (this.props.props.country) {
      case 'usa':
        place = 'White+House,Washington,USA';
        break;
      case 'uk':
        place = '10+downing+street,London,UK';
        break;
      case 'mexico':
        place = 'los+pinos,ciudad+de+mexico,distrito+federal';
        break;
      case 'france':
        place = 'Elysee+Palace,Paris,France';
        break;
      case 'germany':
        place = 'Reichstag+Building,Berlin,Germany';
        break;
      case 'canada':
        place = '24+sussex+drive,ottawa,canada';
        break;
      case 'russia':
        place = 'The+Kremlin,Moscow+Russia';
        break;
      case 'china':
        place = 'zhongnanhai,Beijing,China';
        break;
      case 'japan':
        place = 'Kantei, Tokyo, Japan';
        break;
      default:
        place = 'The+World';
        break;
    }
    return (
      <div className="inner-maps">
        <div id="overlay" onClick={this.clearOverlay} >
        </div>
        <div>
          <iframe
            className="maps"
            frameBorder="0"
            src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyBEERsCbyJvSuyQFpq2IcnunlrO-m-qhc0&q=" + place} allowFullScreen>
          </iframe>
        </div>
      </div>
    )
  }
}

export default Maps;
