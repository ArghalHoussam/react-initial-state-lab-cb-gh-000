// your Bomb code here!

import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super();
    const initialCount = this.props.initialCount;
    this.state = {
      secondsLeft: initialCount
    }
  }

  render() {
    return (
      <div> { this.state.secondsLeft === 0 ? 'Boom!' : 'seconds left before I go boom!' } </div>
    );
  }
}

export default Bomb;
