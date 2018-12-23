import React from 'react';
import Subs from '././Scoreboard/../Subs/Subs';
import Record from '././Scoreboard/../Record/Record';
import "./Bench.css";

function Bench(props) {
    return (
        <div className="Bench">
            
            <Subs/>
            <Record/>
           
        </div>
    );
}

export default Bench;