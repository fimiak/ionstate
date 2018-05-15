import React from 'react';
import { Timeline } from 'react-twitter-widgets';

function TwitterApi(props) {
  return (
    <div id="twitter-inner" className="twitter-inner">
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: props.nation.twitter,
        }}
        options={{
          chrome: 'nofooter, noborders, noheader',
          height: '300',
          tweetLimit: 2,
          width: '330',
        }}
      />
    </div>
  );
}

export default TwitterApi;
