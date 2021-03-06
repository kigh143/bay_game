import React from "react";
import { render } from "react-dom";

export class Playground extends React.Component {
    constructor(){
        super();
        this.state = {
            boradSize: 0,
            cell_size:40,
            size:1000,
            cont:undefined
        }
    }

    createBoard = (event) => {

        this.setState({ boradSize: parseInt(event.target.value) });

        var cols = this.state.boradSize;
        var rows = this.state.boradSize;
        var c_canvas = this.refs.canvas;

        window.addEventListener("keypress", this.movePlayer);

        var ctx = c_canvas.getContext("2d");
        this.setState({cont:ctx});

        let size = this.state.cell_size * cols;
        ctx.clearRect(0,0,size,size);
        for( let i=0; i<rows; i++){
            for( let j=0; j<cols; j++){
                var x =i*this.state.cell_size;
                var y =j*this.state.cell_size;
                ctx.rect(x,y,this.state.cell_size,this.state.cell_size);
            }
        }
        ctx.stroke();
        this.create_play(ctx);
        this.create_sprite(ctx);
    }


    create_sprite = (context) => {
        let sprite_total = parseInt(this.state.boradSize);
        for( let i = 0; i < sprite_total; i++ ){
            let yPosition = Math.floor(Math.random() * sprite_total)*this.state.cell_size;
            let xPosition = Math.floor(Math.random() * sprite_total)*this.state.cell_size;
            context.fillStyle="green";
            context.fillRect(xPosition, yPosition, this.state.cell_size, this.state.cell_size);
        }
    }

    create_play = (context) => {
        let sprite_total = parseInt(this.state.boradSize);
        let yPosition = Math.floor(Math.random() * sprite_total)*this.state.cell_size;
        let xPosition = Math.floor(Math.random() * sprite_total)*this.state.cell_size;
        context.fillStyle="orange";
        context.fillRect(xPosition, yPosition, this.state.cell_size, this.state.cell_size);
    }


    movePlayer = (event) => {
        
        let sprite_total = parseInt(this.state.boradSize);
        let yPosition = Math.floor(Math.random() * sprite_total)*this.state.cell_size;
        let xPosition = Math.floor(Math.random() * sprite_total)*this.state.cell_size;
        this.state.cont.fillStyle="orange";
        
        if(event.keyCode == 100){
            xPosition -= 40;
        } else if(event.keyCode == 115){
            yPosition += 40;
        } else if(event.keyCode == 120){
            xPosition += 40;
        } else if(event.keyCode == 114){
            yPosition -= 40;
        }
        this.state.cont.clearRect(0, 0, this.state.cell_size, this.state.cell_size)
        this.state.cont.fillRect(xPosition, yPosition, this.state.cell_size, this.state.cell_size);

    }


    render (){
        return (
            <div className="board">
                <div className="row">
                    <div className=" col-md-9 input-group mb-3">
                        <div className="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">Game levels</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01" onChange={(event) => this.createBoard(event)}>
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
                <div className="canvas">
                    <canvas ref="canvas" width={this.state.size} height={this.state.size}></canvas>
                </div>
            </div>
        );
    }
}
