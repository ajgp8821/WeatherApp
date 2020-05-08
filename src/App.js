import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import './App.css';
import ForecastExteneded from './components/ForecastExtended';

const cities = [
  'Buenos Aires,ar',
  'Caracas,ve',
  'Barquisimeto,ve',
  'Bogota,col',
  'Mexico,mex',
  'Madrid,es',
  'Toronto,ca',
  'Baker Lake,ca',
  'Sidney,au',
]

class App extends Component {

  constructor() {
    super();
    this.state = { city: null}
  }

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
    this.setState({
      city,
    })
  };

  render(){
    const { city } = this.state;

    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='body1' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectionLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {
                  city && 
                  <ForecastExteneded city={city} />
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>



      // <div className="App">
      //   <header className="App-header">
      //   </header>
      // </div>
    );
  };
}

export default App;
