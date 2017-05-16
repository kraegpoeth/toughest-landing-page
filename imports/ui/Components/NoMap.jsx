import React, { Component } from 'react';

const styles = {
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
  }
}

export default class NoMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      showMap: true
    }

  }

  render() {
    return (
      <div className="container" style={styles.container}>
        <h1>Place resize your browser window to 1490px or more</h1>

      </div>
    );
  }
}
