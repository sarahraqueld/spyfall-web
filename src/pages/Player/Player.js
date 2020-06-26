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

  spyOrLocation = () => 
    this.props.spy ? <div>You are a Spy </div> : <div>Location: {this.props.location}</div>
  

  render(){
    return (
      <div>
        <div> Player 1 </div>
        <div id="reveal" onClick={this.reveal}> reveal </div>
        { this.state.reveal && this.spyOrLocation()  } 
      </div>
    );
  };
}

export default Player;