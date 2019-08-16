//import axios from "axios";
//const dealersURL = 'http://wpstage.forcefield.gpbpittest.com/dealers.php?zip_code=';
const dealersURL = 'http://localhost/forcefield/wp-json/wp/v2/dealers/';
function getDealers(zip_code=0) {
  return fetch(dealersURL+zip_code)
    .then(handleErrors)
    .then(res => res.json());
}

export function findDealer(zip_code=0) {
  return dispatch => {
    dispatch(fetchDealersBegin());
    return getDealers(zip_code)
      .then(json => {
        dispatch(fetchDealersSuccess(json));;
        //console.log(json);
        return json;
      })
      .catch(error =>
        dispatch(fetchDealersFailure(error))
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

export const FETCH_DEALERS_BEGIN = "FETCH_DEALERS_BEGIN";
export const FETCH_DEALERS_SUCCESS =  "FETCH_DEALERS_SUCCESS";
export const FETCH_DEALERS_FAILURE =  "FETCH_DEALERS_FAILURE";

export const fetchDealersBegin = () => ({
  type: FETCH_DEALERS_BEGIN
});

export const fetchDealersSuccess = dealers => ({
  type: FETCH_DEALERS_SUCCESS,
  payload: { dealers }
});

export const fetchDealersFailure = error => ({
  type: FETCH_DEALERS_FAILURE,
  payload: { error }
});
