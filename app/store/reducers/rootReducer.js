import {combineReducers} from 'redux';
import * as actions from '../actions/actionTypes';

const initial_patient = {
  patients:[],
  err:null,
  isLoading:false
}

function patients(state=initial_patient,action){
  switch(action.type){
    case actions.PATIENTS_LOADING:
     return {...state,loading:true}
    case actions.PATIENTS_SEARCH_FAILED:
      return {...state,err:action.err,loading:false}
    case actions.PATIENTS_SEARCH_SUCCESS:
      return {...state,loading:false,err:null,patients:action.patients}
    default:
      return state
  }
}

const rootReducer = combineReducers({
  patients
});

export default rootReducer