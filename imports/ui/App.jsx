import React, { Component } from 'react';
import {Map} from './Components/Map.jsx';
import {Welcome} from './Components/Welcome.jsx';
const styles = {
  container: {
    minHeight: 6000
  },
}

export default class App extends Component {

  render() {
    return (
      <div className="container" style={styles.container}>
        <Welcome/>
        <Map/>


      </div>
    );
  }
}
