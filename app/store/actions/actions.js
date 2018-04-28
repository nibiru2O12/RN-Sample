import * as actions from './actionTypes';

function searchingPatient(){
  return {
    type : actions.PATIENTS_LOADING,
  
  }
}

function searchFailed(err){
  return {
    type : actions.PATIENTS_SEARCH_FAILED,
    err
  }
}

function searchSuccess(patients){
  return {
    type: actions.PATIENTS_SEARCH_FAILED,
    patients  
  }
}

export function searchPatient(searchString){
  return dispatch => {
    dispatch(searchingPatient());

    fetchPatients(searchingPatient)
      .then(result => dispatch(searchSuccess(result)))
      .catch(err => dispatch(searchFailed(err)))

  }
}

function fetchPatients(searchString){
  //return data from API

}