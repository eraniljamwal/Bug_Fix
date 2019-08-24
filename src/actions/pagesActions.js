import  * as Constants from '../Constants';
function getPages(page_id=187) {
  return fetch(Constants.PAGE_URL+page_id)
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

export const fetchPagesBegin = () => ({
  type: Constants.FETCH_PAGES_BEGIN
});

export const fetchPagesSuccess = pages => ({
  type: Constants.FETCH_PAGES_SUCCESS,
  payload: { pages }
});

export const fetchPagesFailure = error => ({
  type: Constants.FETCH_PAGES_FAILURE,
  payload: { error }
});


