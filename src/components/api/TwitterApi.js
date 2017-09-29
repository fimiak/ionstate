import React, { Component } from 'react';

class TwitterApi extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collection: "910286961243414528"
        }
    }

    componentDidMount() {
            window.twttr.widgets.load()                
            window.twttr.ready(function(twttr){
                twttr.widgets.createGridFromCollection(
                this.state.collection,
                document.getElementById("twitter-inner"),
                {
                    limit: 5,
                    chrome: "nofooter",
                    width: "870",
                    height: "400"
                }
                );
            });
      }

    render() {
        return(
            <div id="twitter-inner" className="twitter-inner">
            </div>
        )
    }
}

export default TwitterApi;