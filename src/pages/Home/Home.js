import React from 'react';
import FirebaseService from '../../services/FirebaseService';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gameId: null,
        }
    }

    startGame = () => {
        this.props.history.push('/players/1');
    }

    async componentDidMount() {
        const gameId = await FirebaseService.get();
        this.setState({ gameId: gameId });
    }

    render() {
        return (
            <div>
                <button onClick={this.startGame}>
                    Start Game
                </button>

                { this.state.gameId && <p> Your game id is: { this.state.gameId } </p> }
            </div>
        );
    }
}

export default Home;