import axios from "axios";
import * as ActionTypes from './ActionTypes';
import {baseUrl} from './baseUrl';
import { fetchWeatherData } from './weatherData';

export function fetchAPIResponse(city){

    return function(dispatch){
        axios.get('api.openweathermap.org/data/2.5/weather?q='+city+'&appid=dbf5a9cda078d891a87cf9897936ec2a')
        .then(response =>{
            let name = response.name;

            dispatch({type: "FETCH_LOCATION", payload: name})
            console.log(response);
        }).catch(err =>{
            console.log(err);
        });
    }
}