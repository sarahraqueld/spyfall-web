import React from 'react';
import './Home.css';

function Home({history}) {
    const startGame = () => {
        history.push('/games/new');
    }

    const joinGame = () => {
        history.push('/games/join');
    }

    return (
        <div>
            <button id="start-game" onClick={startGame}>
                Start New Game
            </button>

            <button id="join-game" onClick={joinGame}>
                Join game
            </button>
        </div>
    )
}

export default Home;