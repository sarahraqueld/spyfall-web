import React, { useState, useEffect } from 'react';
import FirebaseService from '../../services/FirebaseService';

function StartNewGame() {
    const [gameId, setGameId] = useState(null);

    const getGameId = async () => {
        const gameId = await FirebaseService.get();
        setGameId(gameId);
    }

    useEffect(() => {
        getGameId();
    }, []);

    return (
        <div> { gameId && <p> Your game id is: { gameId } </p> } </div>
    ) 
}

export default StartNewGame;