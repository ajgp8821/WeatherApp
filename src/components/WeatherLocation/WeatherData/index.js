import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';
import {
    /*CLOUD,
    CLOUDY,
    FOG,*/
    SUN,
    /*RAIN,
    SNOW,
    WINDY,*/
} from './../../../constants/weathers';

const WeatherData = () => (
    <div>
        <WeatherTemperature
            temperature={20}
            weatherState={SUN}
        />
        <WeatherExtraInfo
            humidity={80}
            wind={"10 m/s"}
        />
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherData;
