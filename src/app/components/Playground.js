import React from "react";
import { render } from "react-dom";

export class Playground extends React.Component {
    constructor(){
        super();
        this.state = {
            boradSize: 0,
            cell_size:40,
            size:1000
        }
    }
    createBoard = () => {
        var cols = this.state.boradSize;
        var rows = this.state.boradSize;
        var c_canvas = this.refs.canvas;
        var ctx = c_canvas.getContext("2d");

        let size = this.state.cell_size * cols;
        ctx.clearRect(0,0,size,size);
        let img = this.refs.img;
        let img2 = this.refs.img2;

        for( let i=0; i<rows; i++){
            for( let j=0; j<cols; j++){
                var x =i*this.state.cell_size;
                var y =j*this.state.cell_size;
                let num = Math.floor(Math.random() * 10);
                if( (num%2) == 0 ){
                  ctx.rect(x,y,this.state.cell_size,this.state.cell_size);
                }else{
                    ctx.drawImage(img, x,y);
                }
            }
        }

        ctx.drawImage(img2, 160,160);


        ctx.stroke();
    }

    changevalue= (e) => {
        let value = parseInt(e.target.value);
        this.setState({boradSize:value});
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
