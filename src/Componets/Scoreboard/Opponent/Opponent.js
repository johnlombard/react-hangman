import React from 'react';
import "./Opponent.css";

function Opponent(props) {
    return (
        <div className="Opponent">
            <h2>{`Your Facing: ${props.teams}`}</h2>
            
        </div>
    );
}

export default Opponent;