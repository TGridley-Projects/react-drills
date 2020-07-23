import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from "./Todo"

class App extends Component {
constructor(){
    super()

    this.state={
      list: [],
      input: ''
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleInputChange(value) {
    this.setState({input:value})
  }

  handleAddTask(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input:''
    })
  }


  render(){
    let list = this.state.list.map((elem, ind) => {
      return <Todo key={ind} task={elem} />
    })
    
    return(
      <div className='App'>
        <h1> TODO LIST:</h1>
        <div>
          <input
            value={this.state.input}
            placeholder='Enter new task'
            onChange={e => this.handleInputChange(e.target.value)}
          />

          <button onClick={this.handleAddTask}>Add</button>

        </div>
        <br/>
        {list}
      </div>
    )
  }
}

export default App;
