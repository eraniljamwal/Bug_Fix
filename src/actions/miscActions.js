import  * as Constants from '../Constants';
function getMisc(misc_id=504) {
  return fetch(Constants.MISC_URL+misc_id)
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

export const fetchMiscBegin = () => ({
  type: Constants.FETCH_MISC_BEGIN
});

export const fetchMiscSuccess = misc => ({
  type: Constants.FETCH_MISC_SUCCESS,
  payload: { misc }
});

export const fetchMiscFailure = error => ({
  type: Constants.FETCH_MISC_FAILURE,
  payload: { error }
});
