import React from "react";

export class Scoreboard extends React.Component {
    render (){
        return (
            <div className="scoreboard">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Score Board</li>
                    <li className="list-group-item">Steps taken : 696</li>
                    <li className="list-group-item">Time taken : 6:50:20</li>
                </ul>
            </div>
        );
    }
}
