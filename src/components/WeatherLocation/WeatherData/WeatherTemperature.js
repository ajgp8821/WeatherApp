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
    if (icon)
        return <WeaterIcons name={icon} size="2x" />;
    else
        return <WeaterIcons name="day-sunny" size="2x" />;
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {
            getweatherIcon(weatherState)
        }
        <span>{`${temperature} C°`}</span>
    </div>
);

export default WeatherTemperature;
