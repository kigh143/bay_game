import React from "react";

export class Scoreboard extends React.Component {
    render (){
        return (
            <div className="scoreboard">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Score Board</b></li>
                    <li className="list-group-item">Steps taken : 0</li>
                </ul>
            </div>
        );
    }
}
