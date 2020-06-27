import React from 'react';

function Home({history}) {
    const startGame = () => {
        history.push('/games/new');
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