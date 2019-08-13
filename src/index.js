import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';

class App extends React.Component{
  // constructor(props){
  //   super(props);

  //   this.state = {lat: null, errorMessage: ''};
  // }

  state = {lat: null, errorMessage: ''};

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({errorMessage: err.message})
    );
  }

  componentDidUpdate(){
    console.log('My component was just updated - it rendered!');
  }

  //React says we have to define render!!
  render(){
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>;
    }
    
    if(!this.state.errorMessage && this.state.lat){
      return <SeasonsDisplay lat={this.state.lat} />;
    }
    
    return <div>Loading!</div>;
    
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);