import React from 'react';
import FirebaseService from '../../services/FirebaseService';

class StartNewGame extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gameId: null,
        }
    }

    async componentDidMount() {
        const gameId = await FirebaseService.get();
        this.setState({ gameId: gameId });
    }

    render() {
        return (
            <div> { this.state.gameId && <p> Your game id is: { this.state.gameId } </p> } </div>
        )
    };
}

export default StartNewGame;