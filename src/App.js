import React, { Component } from "react";

import "./App.css";
import Wizard from './components/steps/wizard';

class App extends Component {

  

 

  render() {
    return (
      <div className="App">
        <div className="header">
          <img src="./wizard.png" width="100" height="100"/>
          <h1>Wizard Application</h1>
        </div>
       
        <div>
          <Wizard/>
        </div>
      </div>
    );
  }
}

export default App;
