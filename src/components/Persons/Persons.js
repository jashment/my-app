import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
static getDerivedStateFromProps(props, state) {
    console.log('[Persons.js] getDerivedStateFromProps');
    return state;
}    

shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    
    return true;
}

getSnapshotBeforeUpdate(prevProsp, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
}

componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate');
}

    render() {
        return this.props.persons.map((person, index) => {

        return <Person 
            click={() => this.props.clicked(index)} 
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)} />
          });
          
    }
}

export default Persons;