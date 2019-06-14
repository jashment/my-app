import React, { Component, useState } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Radium, {StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');

  }
  
  state = {
    persons: [
      {id: 'assdfa', name: 'Jordan', age: 28},
      {id: 'oofo', name: 'Amy', age: 27},
      {id: 'oougoo', name: 'Eli', age: 0},
    ],
    showPersons: false,
    showCockpit: true,
  }
  
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[App.js] getDerivedStateFromProps', props);
  //   return state;
  // }
  
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }
  
  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
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
    
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({
      persons: persons
    });
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
  render() {
    console.log('[App.js] render');
    
    let persons = null;

    
    if (this.state.showPersons) {
      persons = (

          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />

      );

    }
    
    
    return (
      <StyleRoot>
        <div className={classes.App}>
        <button onClick={() => {
        this.setState({showCockpit: false});
        }}
        >Remove Cockpit</button>
        {this.state.showCockpit ? (
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
        ) : null }
          {persons}
        </div>
      </StyleRoot>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'));
  }
}

export default Radium(App);
