import {combineReducers} from 'redux';
import * as actions from '../actions/actionTypes';

const initial_patient = {
  patients:[],
  err:null,
  loading:false
}

function patients(state=initial_patient,action){
  switch(action.type){
    case actions.PATIENTS_LOADING:
    case actions.PATIENTS_SEARCH:
    case actions.PATIENTS_SEARCH_FAILED:
    case actions.PATIENTS_SEARCH_SUCCESS:
    default:
      return state
  }
}

const rootReducer = combineReducers({
  patients
});

export default rootReducer