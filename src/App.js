import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Caracas,ve',
  'Barquisimeto,ve',
  // 'Bogota,col',
  // 'Mexico,mex',
  // 'Madrid,es',
  // 'Toronto,ca',
  // 'Baker Lake,ca',
  // 'Sidney,au',
]

class App extends Component {

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  };

  render(){
    return (
      <div className="App">
        {/* <header className="App-header"> */}
          <LocationList
            cities={cities}
            onSelectionLocation={this.handleSelectedLocation}
          />
        {/* </header> */}
      </div>
    );
  };
}

export default App;
