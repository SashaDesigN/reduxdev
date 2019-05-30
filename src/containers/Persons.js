import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

class Persons extends Component {
    
    state = {}

    render () {
        return (
            <div>
                <AddPerson personAdded={() => this.props.onAddPerson({
                    id: Math.random(), // not really unique but good enough here!
                    name: 'Max',
                    age: Math.floor( Math.random() * 40 )
                })} />

                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.prs.persons
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPerson: (person) => dispatch({type: actionTypes.ADD_PERSON, person}),
        onDeletePerson: (id) => dispatch({type: actionTypes.DELETE_PERSON, id})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);