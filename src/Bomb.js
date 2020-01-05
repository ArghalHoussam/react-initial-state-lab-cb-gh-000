// your Bomb code here!

import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: this.props.initialCount;
    }
  }

  render() {
    return (
      { this.state.secondsLeft === 0 ? 'Boom!' : 'seconds left before I go boom!' } 
    );
  }
}

export default Bomb;
