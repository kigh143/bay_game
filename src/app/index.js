import React from "react";
import { render } from "react-dom";
import {  Scoreboard  } from "./components/Scoreboard";
import {  Playground  } from "./components/Playground";

class App extends React.Component {
    render (){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-8 col-xs-6 left">
                        <Playground/>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-6 right">
                        <Scoreboard/>
                    </div>
                </div>
            </div>
        );
    }
}

render ( <App/>, window.document.getElementById("app")); 