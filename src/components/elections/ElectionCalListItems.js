import React, { PropTypes } from 'react';

function ElectionCalListItems(props) {
  return (
    <ul className="election-cal-list">
      {props.loaded ? props.list : props.quick }
    </ul>
  );
}

/* ElectionCalListItems.propTypes = {
  loaded: PropTypes.node.isRequired,
  list: PropTypes.node.isRequired,
  quick: PropTypes.node.isRequired,
};
*/

export default ElectionCalListItems;
