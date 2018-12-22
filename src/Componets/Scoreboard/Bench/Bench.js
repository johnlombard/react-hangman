import React from 'react';
import Subs from '././Scoreboard/../Subs/Subs';
import Record from '././Scoreboard/../Record/Record';

function Bench(props) {
    return (
        <div className="Bench">
            <h2>HAVE RECORD AND SUBS(LETTERS GUESSED)</h2>
            <Subs/>
            <Record/>
           
        </div>
    );
}

export default Bench;