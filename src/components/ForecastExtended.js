import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';
import { apiKey, urlBaseForecast } from '../constants/apiUrl';

/*const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
];

const data = {
    temperature: 10,
    weatherState: 'normal',
    humidity: 10,
    wind: 'normal',
};*/

class ForecastExteneded extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city){
            this.setState({ forecastData: null });
            this.updateCity(nextProps.city);
        }
    }
    
    updateCity = city =>{
        const urlForecast = `${urlBaseForecast}?q=${city}&appid=${apiKey}`;

        fetch(urlForecast).then(
            data => (data.json())
        ).then(
            weatherData => {
                console.log(weatherData);
                const forecastData = transformForecast(weatherData);
                console.log(forecastData);
                this.setState({ forecastData });
            }
        );
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map( forecast => (
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data} />) );
    }

    renderProgress() {
        return <h3>Cargando Pronóstico Extendido ...</h3>;
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
                {forecastData ?
                    this.renderForecastItemDays(forecastData): 
                    this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExteneded.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExteneded;
