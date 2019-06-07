import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    
    if(props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <=1) {
      assignedClasses.push(classes.bold);
    }
    
    return (
        <div>
            <h1>Hi, I'm a React App!</h1>
            <p className={assignedClasses.join(' ')}>I'm a Paragraph!</p>
            <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;