import React from 'react';
import classes from './Cockplit.css';


const cockplit = (props) => {
    let assignClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        assignClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockplit}>
            <h1>{props.appTitle} </h1>
            <p className={assignClasses.join(' ')}>This is really working!!!</p>
            <button
                className={btnClass}
                onClick={props.btnOnClick}>Switch Name</button>
        </div>
    );
}

export default cockplit;