import React from 'react';

function Home(props) {
    const startGame = () => {
        props.history.push('/games/new');
    }

    return (
        <div>
            <button onClick={startGame}>
                Start New Game
            </button>
        </div>
    )
}

export default Home;