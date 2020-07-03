import React, { useState, useEffect } from 'react';
import FirebaseService from '../../services/FirebaseService';

function StartNewGame({history}) {
    const [gameId, setGameId] = useState(null);

    const getGameId = async () => {
        const gameId = await FirebaseService.get();
        setGameId(gameId);
    }

    const start = () => {
        history.push('/players/1');
    }

    useEffect(() => {
        getGameId();
    }, []);

    return (
        <div> 
            <div> { gameId && <p> Your game id is: { gameId } </p> } </div>
            <button onClick={start}> I am ready! </button>
        </div>
    ) 
}

export default StartNewGame;