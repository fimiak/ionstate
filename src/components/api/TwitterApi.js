import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';

class TwitterApi extends Component {
    render() {        
        return(
            <div id="twitter-inner" className="twitter-inner">
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: this.props.nation.twitter
                    }}
                    options={{
                        chrome: 'noheader, nofooter, noborders',        
                        height: '350',
                        tweetLimit: 2,
                        width: '450'
                    }}
                />
            </div>
        )
    }
}

export default TwitterApi;