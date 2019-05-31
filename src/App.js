import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  
  state = {
    persons: [
      {id: 'assdfa', name: 'Jordan', age: 28},
      {id: 'oofo', name: 'Amy', age: 27},
      {id: 'oougoo', name: 'Eli', age: 0},
    ],
    showPersons: false,
  }
  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; //spread operator
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };
    
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
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
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
