import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(){
    super()

    this.state = {

      names: ['Trevor', 'Tessa', 'Ellie', 'Ashley', 'Trenton'] 

    }
  }

  render(){
    let displayNames = this.state.names.map((elem, ind)=>{

      return <h2> key {ind} > {elem}</h2>   

    })

    return <div className='App'>{displayNames}</div>   

  }
}


export default App;
