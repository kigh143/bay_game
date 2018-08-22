import React from "react";
import { render } from "react-dom";
import {  Scoreboard  } from "./components/Scoreboard";
import {  Playground  } from "./components/Playground";

class App extends React.Component {
    render (){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Playground/>
                    </div>
                    <div className="col-md-4">
                        <Scoreboard/>
                    </div>
                </div>
            </div>
        );
    }
}

render ( <App/>, window.document.getElementById("app")); 