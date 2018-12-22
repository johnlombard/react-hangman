import React from 'react';
import Bench from './Componets/../Bench';
import Opponent from './Componets/../Opponent';
function Scoreboard(props) {
    return (
        <div className="Scoreboard">
            <h1>THIS IS THE SCORE BOARD</h1>
            <Bench/>
            <Opponent/>

        </div>
    );
}

export default Scoreboard;