import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      filteredName: '',
      names: ['Trevor', 'Tessa', 'Ellie', 'Ashley', 'Trenton']
    }
  }

  handleChange(filter){
    this.setState({
      filteredName: filter
    })
  }


  render(){

    let displayNames = this.state.names.filter((elem, ind) => {
      return elem.includes(this.state.filteredName)
    })

    .map((elem, ind)=>{
      return <h2> Key = {ind} > {elem}</h2>
    })
    
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {displayNames}
      </div>
    );
  }



}

export default App;
