import  * as Constants from '../Constants';
function getDealers(zip_code=0) {
  return fetch(Constants.DEALERS_URL+zip_code)
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



export const fetchDealersBegin = () => ({
  type: Constants.FETCH_DEALERS_BEGIN
});

export const fetchDealersSuccess = dealers => ({
  type: Constants.FETCH_DEALERS_SUCCESS,
  payload: { dealers }
});

export const fetchDealersFailure = error => ({
  type: Constants.FETCH_DEALERS_FAILURE,
  payload: { error }
});
