import React, { Component } from 'react';
const styles = {
  container: {
    minHeight: 300,
    width: '40%',
    margin: 'auto',
    backgroundColor: 'white',
    zIndex: 100,
  },

}

export class Welcome extends Component {

  render() {
    return (
      <div className="container" style={styles.container}>
        <header>
          <h1>Toughest Malmø 2017</h1>
        </header>
        <h4>Scroll down to see this years course</h4>


      </div>
    );
  }
}
