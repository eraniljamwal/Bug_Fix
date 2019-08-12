//import axios from "axios";
const pagesUrl = 'http://wpstage.forcefield.gpbpittest.com/wp-json/wp/v2/pages/';
function getPages(page_id=187) {
  return fetch(pagesUrl+page_id)
    .then(handleErrors)
    .then(res => res.json());
}

export function fetchPages(page_id=187) {
  return dispatch => {
    dispatch(fetchPagesBegin());
    return getPages(page_id)
      .then(json => {
        dispatch(fetchPagesSuccess(json));
        //console.log(json);
        return json;
      })
      .catch(error =>
        dispatch(fetchPagesFailure(error))
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

export const FETCH_PAGES_BEGIN = "FETCH_PAGES_BEGIN";
export const FETCH_PAGES_SUCCESS =  "FETCH_PAGES_SUCCESS";
export const FETCH_PAGES_FAILURE =  "FETCH_PAGES_FAILURE";
export const FETCH_CONTACT =  "FETCH_CONTACT";

export const fetchPagesBegin = () => ({
  type: FETCH_PAGES_BEGIN
});

export const fetchPagesSuccess = pages => ({
  type: FETCH_PAGES_SUCCESS,
  payload: { pages }
});

export const fetchPagesFailure = error => ({
  type: FETCH_PAGES_FAILURE,
  payload: { error }
});


const dealersUrl = 'http://wpstage.forcefield.gpbpittest.com/dealers.php?zip_code=';
function getDealers(zip_code) {
  console.log(dealersUrl+zip_code);
  return   fetch(dealersUrl+zip_code).then(handleErrors)
  .then(res => res.json());
}


export const FETCH_DEALERS_FAILURE =  "FETCH_DEALERS_FAILURE";
export const FETCH_DEALERS_SUCCESS =  "FETCH_DEALERS_SUCCESS";

export function findDealer(zip_code) {
  return dispatch => {
    return getDealers(zip_code).then(dealers => {
        dispatch(fetchPagesSuccess(dealers));
        //console.log(json);
        return dealers;      
    }).catch(error =>
      dispatch(fetchDealersFailure(error))
    );   
  };
}

export const fetchDealersFailure = error => ({
  type: FETCH_DEALERS_FAILURE,
  payload: { error }
});

export const fetchDealersSuccess = dealers => ({
  type: FETCH_DEALERS_SUCCESS,
  payload: { dealers }
});