import React, { Component } from 'react';
import Dimensions from 'react-dimensions'

import {Map} from './Components/Map.jsx';
import {NoMap} from './Components/NoMap.jsx';
import {Welcome} from './Components/Welcome.jsx';
import {Rss} from './Components/Rss.jsx';

const styles = {
  container: {
    height: 6000,
  },
  noMap: {
    container: {
      width: '100%',
      height: '100%',
      margin: 'auto',
      textAlign: 'center',
      zIndex: 100,
      color: '#faf3eb',
      backgroundColor: '#223347',
      fontFamily: 'Ubuntu',
      position: 'absolute'
    },
    header: {
      fontFamily: 'Anton',
      textTransform: 'toUppercase'
    },
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.renderMap = this.renderMap.bind(this);
  }
  renderMap(){
    if (this.props.containerWidth > 1370) {
      return <div><Welcome/><Map/></div>
    } else {
      return <div style={styles.noMap.container}><h1 style={styles.noMap.header}>Please make your screen wider than 1370px</h1></div>
    }
  }
  render() {
    return (
      <div className="container" style={styles.container}>

        {this.renderMap()}

        <Rss/>

      </div>
    );
  }
}
export default Dimensions()(App)
