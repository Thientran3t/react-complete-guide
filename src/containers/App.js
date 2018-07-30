import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockplit from '../components/Cockplit/Cockplit';
import classes from './App.css';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: '1', name: 'Max', age: 28 },
        { id: '2', name: 'Manu', age: 29 },
        { id: '3', name: 'Stephane', age: 26 }
      ],
      ortherState: 'Some Orther value',
      showPersons: false
    }
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount');
  }
  componentDidMount(){
    console.log('[App] Inside componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    return true;
  }
  componentDidUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }
  // state = {
  //   persons: [
  //     { id: '1', name: 'Max', age: 28 },
  //     { id: '2', name: 'Manu', age: 29 },
  //     { id: '3', name: 'Stephane', age: 26 }
  //   ],
  //   ortherState: 'Some Orther value',
  //   showPersons: false
  // }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id = id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />

        </div>
      );
    }   
    return (
      < div className={classes.App}>   
        <Cockplit
          appTitle = {this.props.title}
          persons= {this.state.persons}
          showPersons = {this.state.showPersons}
          btnOnClick = {this.togglePersonHandler}
        /> 
        { persons }
      </div >
    );
  }
}

export default App;
