import React, { Component } from 'react';
require('velocity-animate');
require('velocity-animate/velocity.ui');
import VelocityTransitionGroup from 'velocity-react/velocity-transition-group';
import VelocityComponent from 'velocity-react/velocity-component';

const styles = {
  container: {
    top: 5250,
    height: 1000,
    width: '100%',
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
    textTransform: 'toUppercase',
    paddingTop: 50
  },

}
const FEED_URL = "http://www.api.notified.com/Channel/66bbc5cf-0030-e711-80d6-a0d3c1f2861f?key=ab07bd54-7766-46dd-8480-2daa14035af0&format=basic&limit=50"

export class Rss extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){

    $.get(FEED_URL, function (data) {
    $(data).find("item").each(function () { // or "item" or whatever suits your feed
        var el = $(this);

        console.log("------------------------");
        console.log("title      : " + el.find("title").text());
        console.log("link     : " + el.find("link").text());
        console.log("description: " + el.find("description").text());
    });
});
  }
  render() {

    return (
      <div className="container" style={styles.container}>
        <h1 style={styles.header}>Live News From Riddersborg!</h1>
        

      </div>
    );
  }
}
