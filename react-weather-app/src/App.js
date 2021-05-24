
import './App.css';
import {Main} from './components/MainComponent';
import React, {Component} from 'react';

 class App extends Component{

  constructor(props){
    super(props)
  }

  render(){
    return(

      <div className="App">
      <Main/>
    </div>

    );
  }

}

export default App;




