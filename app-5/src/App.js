import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'

class App extends Component{
  render(){
    return(
      <div className='Apps'>
        <Image url={'https://i.pinimg.com/originals/85/7a/4e/857a4e343dc505463fb282d5b9a66acf.jpg'} />
      </div>
    )
  }

}

export default App;
