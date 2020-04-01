import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import transformWeather from './../../services/transformWeather';
import { apiWeather } from './../../constants/apiUrl'
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: null,
        };
        console.log('constructor');
    };

    componentDidMount() {
        console.log('componentDidMount');
        this.handleUpdateClick();
    };

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    };

    handleUpdateClick = () => {
        fetch(apiWeather).then( resolve => {
            return resolve.json()
        }).then(data =>{
            console.log('Resultado del handleUpdateClick');
            const newWeather = transformWeather(data);
            // console.log(newWeather);
            debugger;
            this.setState({
                data: newWeather
            })
        });
    };
    
    render() {
        console.log('render');
        const { city, data } = this.state;
        return(
            <div className="weatherLocationCont">
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

export default WeatherLocation;
