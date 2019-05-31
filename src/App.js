import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  
  state = {
    persons: [
      {name: 'Jordan', age: 28},
      {name: 'Amy', age: 27},
      {name: 'Eli', age: 0},
    ],
    showPersons: false,
  }
  
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Amytha', age: 27},
        {name: 'Baby Eli', age: 0},
        ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Jordan the Destroyer', age: 28},
        {name: event.target.value, age: 27},
        {name: 'Baby Eli', age: 0},
        ]
    })
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
        <div >
            <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Jordan the Great')}>My Hobbies: Being Awesome</Person>
            <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}/>
            <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
          </div>
      );
    }
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'));
  }
}

export default App;
