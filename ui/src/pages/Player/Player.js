import React from 'react';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reveal: false
    }
  }

  reveal = () => {
    this.setState({reveal: true});
  }

  render(){
    return (
      <div>
        <div id="reveal" onClick={this.reveal}> </div>
        { this.state.reveal && <div> Location: </div> }
      </div>
    );
  };
}

export default Player;