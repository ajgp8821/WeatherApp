import React from 'react';
import PropTypes from 'prop-types';
import WeaterIcons from 'react-weathericons';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
    // CLOUDY,
    // FOG,
    // WINDY,
} from './../../../constants/weathers';
import './styles.css';

const icons = {
    [CLOUD]: 'cloud',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [THUNDER]: 'day-thunderstorm',
    [DRIZZLE]: 'drizzle',
    // [CLOUDY]: 'cloudy',
    // [FOG]: 'day-fog',
    // [WINDY]: 'windy',
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

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
