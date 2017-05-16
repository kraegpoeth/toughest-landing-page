import React, { Component } from 'react';
require('velocity-animate');
require('velocity-animate/velocity.ui');
import VelocityTransitionGroup from 'velocity-react/velocity-transition-group';
import VelocityComponent from 'velocity-react/velocity-component';

const styles = {
  container: {
    minHeight: 300,
    width: '40%',
    margin: 'auto',
    textAlign: 'center',
    zIndex: 100,
    color: '#faf3eb',
    fontFamily: 'Anton',
    textTransform: 'toUppercase'
  },
  header: {
    fontFamily: 'Anton',
    textTransform: 'toUppercase'
  },
  scrollArrow: {
    fontFamily: 'Ubuntu',
  }
}

export class Welcome extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMsg1: true,
      showMsg2: false,
      showMsg3: false,
      showMsg4: false,
    }
  }
  componentDidMount(){
    self = this;
    setTimeout(function(){
      self.setState({
        showMsg1: false,
        showMsg2: true
      })
    }, 2000);
    setTimeout(function(){
      self.setState({
        showMsg2: false,
        showMsg3: true
      })
    }, 4000);
    setTimeout(function(){
      self.setState({
        showMsg3: false,
        showMsg4: true
      })
    }, 6000);
    setTimeout(function(){
      self.setState({
        showMsg4: false,
        showMsg5: true
      })
    }, 8000);
  }
  render() {

    return (
      <div className="container" style={styles.container}>
        <header>
          <h1 style={styles.header}>Toughest Malmø 2017</h1>
        </header>

        <VelocityTransitionGroup enter={{animation: "fadeIn", delay: 500}} runOnMount={true} leave={{animation: "fadeOut"}}>
           {this.state.showMsg1 ? <h3>13 of May 2017</h3> : undefined}
           {this.state.showMsg2 ? <h3>100 Contestasts</h3> : undefined}
           {this.state.showMsg3 ? <h3>Will take on 40 hinders</h3> : undefined}
           {this.state.showMsg4 ? <h3>to see who is Toughest.</h3> : undefined}

           {this.state.showMsg5 ?
             <VelocityComponent animation={{scale: 1.3}} loop={true} runOnMount={true}>
               <div>
                 <h5 style={styles.header}>Scroll Down</h5>
                 <h1 style={styles.scrollArrow}>V</h1>
               </div>

              </VelocityComponent>

              : undefined}
         </VelocityTransitionGroup>



      </div>
    );
  }
}
