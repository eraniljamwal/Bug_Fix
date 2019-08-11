//import axios from "axios";
const miscURL = 'http://wpstage.forcefield.gpbpittest.com/wp-json/wp/v2/miscellaneous/';
function getMisc(misc_id=504) {
  return fetch(miscURL+misc_id)
    .then(handleErrors)
    .then(res => res.json());
}

export function fetchMisc(misc_id=187) {
  return dispatch => {
    dispatch(fetchMiscBegin());
    return getMisc(misc_id)
      .then(json => {
        dispatch(fetchMiscSuccess(json));;
        //console.log(json);
        return json;
      })
      .catch(error =>
        dispatch(fetchMiscFailure(error))
      );
  };
}


// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_MISC_BEGIN = "FETCH_MISC_BEGIN";
export const FETCH_MISC_SUCCESS =  "FETCH_MISC_SUCCESS";
export const FETCH_MISC_FAILURE =  "FETCH_MISC_FAILURE";

export const fetchMiscBegin = () => ({
  type: FETCH_MISC_BEGIN
});

export const fetchMiscSuccess = misc => ({
  type: FETCH_MISC_SUCCESS,
  payload: { misc }
});

export const fetchMiscFailure = error => ({
  type: FETCH_MISC_FAILURE,
  payload: { error }
});
