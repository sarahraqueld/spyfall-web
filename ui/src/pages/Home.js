import React from 'react';
import StartGame from "./StartGame";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {gameOn: false};
    }

    startGame() {
        this.setState({ gameOn: true} );
    }

    render(){
        if (!this.state.gameOn) {
            return (
                <button onClick={() => this.startGame()}>
                    Start Game
                </button>
            );
        } else {
            return (
                <StartGame />
            )
        }
    }
}

export default Home;