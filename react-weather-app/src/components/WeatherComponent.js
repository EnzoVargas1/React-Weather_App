import React, {Component} from 'react';

export function RenderForecast({isClicked})  {
    if(isClicked === true){
        return(
            <div className ="container">
                <div className="col-12">
                    <div className="row">
                        <h2>City: </h2>
                    </div>
                    <div className="row">
                        <h2>Temperature: </h2>
                    </div> 
                    <div className="row">
                        <h2>Coordinates: </h2>
                    </div>
                </div>
            </div>
            );
        
    }
    else{
        return(
            <div>
                <h1>Empty</h1>
            </div>
        )
    }
    
}
