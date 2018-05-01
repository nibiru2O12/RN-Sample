import axios from '../../components/UI/Axios';

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
    type: actions.PATIENTS_SEARCH_SUCCESS,
    patients  
  }
}

export function searchPatient(searchString){
  return dispatch => {
    console.log('search')
    dispatch(searchingPatient());

    axios.get(`/api/patients`,{
      params:{
        search: searchString
      }
    })
      .then(result => {
        dispatch(searchSuccess(result.data))
      })
      .catch(err => dispatch(searchFailed(err)))

  }
}

function fetchPatients(searchString){
  //return data from API

}