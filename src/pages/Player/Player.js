import React from 'react';
import PlayerApi from '../../api/Player';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reveal: false,
      player: null,
    }
  }

  setPlayer = async () => {
    const urlParams = this.props?.match?.params
    const playerId = urlParams?.id;
    const gameId = urlParams?.gameId;
    const player = await PlayerApi.get(gameId, playerId);
    this.setState({player: player});
  }

  componentDidMount() {
    this.setPlayer();
  }

  reveal = () => 
    this.setState({reveal: true});
  

  spyOrLocation = () => 
    this.state.player?.spy ? <div>You are a Spy </div> : <div>Location: {this.state.player?.location}</div>
  

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