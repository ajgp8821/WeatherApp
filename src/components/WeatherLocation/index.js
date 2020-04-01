import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity'
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        };
        // console.log('constructor');
    };

    componentDidMount() {
        // console.log('componentDidMount');
        this.handleUpdateClick();
    };

    componentDidUpdate(prevProps, prevState) {
        // console.log('componentDidUpdate');
    };

    handleUpdateClick = () => {
        const apiWeather = getUrlWeatherByCity(this.state.city);

        fetch(apiWeather).then( resolve => {
            return resolve.json()
        }).then(data =>{
            // console.log('Resultado del handleUpdateClick');
            const newWeather = transformWeather(data);
            // console.log(newWeather);
            // debugger;
            this.setState({
                data: newWeather
            })
        }).catch(error =>{
            console.log(error);
        });
    };
    
    render() {
        // console.log('render');
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
                <Location city={city} />
                {data ? 
                    <WeatherData data={data} /> :
                    <CircularProgress size={50} />
                }
                {/* <button onClick={this.handleUpdateClick}>Actualizar</button> */}
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;
