import React from 'react';

class Home extends React.Component {
    startGame = () => {
        this.props.history.push('/players/1');
    }

    render() {
        return (
            <button onClick={this.startGame}>
                Start Game
            </button>
        );
    }
}

export default Home;