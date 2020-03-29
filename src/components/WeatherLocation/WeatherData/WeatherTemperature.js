import React from 'react';
import WeaterIcons from 'react-weathericons';
import {
    CLOUD,
    CLOUDY,
    FOG,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../../constants/weathers';
import './styles.css';

const icons = {
    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [FOG]: 'day-fog',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [WINDY]: 'windy',
};

const getweatherIcon = weatherState => {
    const icon = icons[weatherState];

    const sizeIcon = '4x';
    if (icon)
        return <WeaterIcons className="wicon" name={icon} size={sizeIcon} />;
    else
        return <WeaterIcons className="wicon" name="day-sunny" size={sizeIcon} />;
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="eatherTemperatureCont">
        {
            getweatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`C°`}</span>
    </div>
);

export default WeatherTemperature;
