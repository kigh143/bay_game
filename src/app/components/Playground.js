import React from "react";
import { render } from "react-dom";

export class Playground extends React.Component {
    constructor(){
        super();
        this.state = {
            boradSize: 0,
        }
    }
    createBoard = () => {

    }


    render (){
        return (
            <div className="board">
                <div className="row">
                    <div className=" col-md-9 input-group mb-3">
                        <div className="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">Game levels</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01" onChange={(event) => this.changevalue(event)}>
                        <option selected>Choose level</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <button onClick={this.createBoard } className="btn btn-primary"> start game</button>
                    </div>
                </div>
                <span>Game charaters : </span>
                <img ref="img"  src={"../../imgs/rat.png"}  className="img"/>
                <img ref="img2"  src={"../../imgs/cat.png"}  className="img"/>
                <div className="canvas">
                    <canvas ref="canvas" width={this.state.size} height={this.state.size}></canvas>
                </div>
            </div>
        );
    }
}
