import React, { Component } from 'react';
var ProgressBar = require('react-progressbar.js')
var Line = ProgressBar.Line;

const styles = {
  container: {
    height: 250,
    width: 600,
    left: 40,
    top: 20,
    textAlign: 'center',
    zIndex: 100,
    position: 'fixed',
    color: '#faf3eb',
    backgroundColor: '#384759',
  },
  img: {
    width: 250,
    float: 'right'
  },
  textBox: {
    width: '50%',
    padding: 10,
    float: 'left',
  },
  imgBox: {
    width: '50%',
    overflow: 'hidden',
    margin: 'auto',
  },
  header: {
    fontFamily: 'Anton',
    textTransform: 'uppercase'
  },
  text: {
    fontFamily: 'Ubuntu'
  },
  progressContainer: {
    margin: 5,
    width: 250,
    height: 50,
  }
}
const progressbarOptions = {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1000,
  color: '#F04950',
  trailColor: '#5A5F63',
  trailWidth: 1,
  text: {
    style: {
      color: '#faf3eb',
      position: 'absolute',
      fontFamily: 'Ubuntu',
      right: '-40px',
      top: '-1px',
      padding: 0,
      margin: 0,
      transform: null
    },
  }
}
export class Hinder extends Component {

  render() {
    return (
      <div className="container" style={styles.container}>
        <div style={styles.textBox}>
          <header>
            <h1 style={styles.header}>{this.props.hinder.name}</h1>
          </header>
          <p style={styles.text}>
            {this.props.hinder.text}
          </p>
          <span>
            <h5 style={styles.header}>Completion Rate</h5>
            {this.props.hinder.rate ?
              <Line
                progress={this.props.hinder.rate / 100}
                text={this.props.hinder.rate + "%"}
                options={progressbarOptions}
                initialAnimate={true}
                containerStyle={styles.progressContainer}
                containerClassName={'.progressbar'} />
              :
              ""
            }

          </span>
        </div>
        <img src={this.props.hinder.imgPath} style={styles.img} />




      </div>
    );
  }
}
