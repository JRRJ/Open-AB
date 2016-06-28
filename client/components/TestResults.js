import React, { PropTypes, Component } from 'react';
import uuid from 'uuid';

class TestResults extends Component {
  render() {
    return (
      <ul>
        {this.props.data.map((data) =>
          <ul>
            <li key={uuid.v4()}><strong>Element {data.id}</strong></li>
            <li key={uuid.v4()}>Info: {data.name}</li>
            <li key={uuid.v4()}>Clicks: {data.result_a}</li>
          </ul>
        )}
      </ul>
    );
  }
}

TestResults.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TestResults;
