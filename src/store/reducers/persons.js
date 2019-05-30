import * as actionTypes from '../actions';

const initState = {
	persons: []
};

const reducer = (state = initState, action) => {
 
	switch (action.type){
		case 'ADD_PERSON':
			return {
				...state,
				persons: state.persons.concat({...action.person})
			};
		case 'DELETE_PERSON':
			const newPersons = state.persons.filter(elem => elem.id !== action.id);

			return {
				...state,
				persons: newPersons
			};
	}

	return state;
};

export default reducer;