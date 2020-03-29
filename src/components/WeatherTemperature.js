import React from 'react';
import WeaterIcons from 'react-weathericons';

const icons = {
    sunny: 'day-sunny',
    fog: 'day-fog'
}
const getweatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon)
        return <WeaterIcons name={icon} size="2x" />;
    else
        return <WeaterIcons name="day-sunny" size="2x" />;
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {
            getweatherIcon(weatherState)
        }
        <span>{`${temperature} C°`}</span>
    </div>
);

export default WeatherTemperature;
