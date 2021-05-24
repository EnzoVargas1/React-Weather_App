import React, { Component } from 'react';
import {RenderForecast} from './WeatherComponent';

var showForecast = false;

export class Main extends Component {
    constructor(props){
        super(props);
        this.state ={
            isClicked: false,
        }

    }

    buttonClicked = () => {
        this.setState(previousState => {
            return{
            isClicked: !this.state.isClicked,
            }
        });
        showForecast = true;
         
    }

     
    render(){
       return(
        <div className="container">
            <div className="col-12">
                <div className ="row">
                    <h1>React Weather App</h1>
                </div>
            <div className="row" >
            <form onSubmit={() =>{showForecast= true}}>
            <label>City: </label>
            <input className ="text" name="city"></input>
             <button onClick={this.buttonClicked}>Submit</button>
             </form>
            </div>
            <div className="row">
                <RenderForecast isClicked={showForecast}/>
            </div>
            </div>
        </div>
       );
    }

}

