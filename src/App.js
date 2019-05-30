import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Jordan', age: 28},
      {name: 'Amy', age: 27},
      {name: 'Eli', age: 0},
    ]
  });
  
  const [otherState, setOtherState] = useState('some other value');
  
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Jordan the Destroyer', age: 28},
        {name: 'Amytha', age: 27},
        {name: 'Baby Eli', age: 0},
        ]
    })
  };

  
  // render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies: Being Awesome</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'));
  // }
}

export default App;
