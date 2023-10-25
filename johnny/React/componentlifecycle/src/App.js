import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component {
  render(){
    return(
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" /><br></br>
      
        <b>Component life cylce example</b>
        </div>

    );
  }
}

export default App;
