import {combineReducers} from "redux";
import  {fetchWeatherData} from './weatherData';
import {fetchLocation} from './location';
import {fetchConditions} from './conditions';

export const reducers= combineReducers({
    //well we assign it to another object, in a away
    FetchWeatherReducer : fetchWeatherData,
    FetchWeatherLocation: fetchLocation,
    FetchCurrentConditions: fetchConditions
});

  

       


    