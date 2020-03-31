import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    /*CLOUD,
    CLOUDY, */
    FOG,
    SUN,
    /*RAIN,
    SNOW,
    WINDY,*/
} from './../../constants/weathers';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
};

const data2 = {
    temperature: 6,
    weatherState: FOG,
    humidity: 60,
    wind: '24 m/s',
};

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data,
        };
    }

    handleUpdateClick = () => {
        console.log("Actualizar");
        this.setState  ({
            data: data2,
        });
    }

    render() {
        const { city, data } = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;
