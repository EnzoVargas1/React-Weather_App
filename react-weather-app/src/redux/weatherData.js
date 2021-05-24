import * as ActionTypes from './ActionTypes';

export const fetchWeatherData=(
            
    state={
    weatherData:[] 
    }, 
   
    action)=>{
        
        if(action.type === "FETCH_WEATHER"){
        
            state= {...state, weatherData: action.payload}
        }
        
        return state;
    };