import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = ( {cities, onSelectionLocation } ) => {

    const handleWeatherLocationClick = city => {
        console.log('handleWeatherLocationClick');
        onSelectionLocation(city);
    }

    const strToComponents = cities =>(
        cities.map( city => ( 
            <WeatherLocation 
                key={city}
                city={city}
                onWeatherLocationClick={() => handleWeatherLocationClick(city)}
            />
        ))
    );

    return (
        <div>
            {strToComponents(cities)}
        </div>
    )
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectionLocation: PropTypes.func,
}

export default LocationList;
