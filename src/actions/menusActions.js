import  * as Constants from '../Constants';
function getMenus() {
  return fetch(Constants.MENUS_URL)
    .then(handleErrors)
    .then(res => res.json());
}

export function findMenus() {
  return dispatch => {
    dispatch(fetchMenusBegin());
    return getMenus()
      .then(json => {
        dispatch(fetchMenusSuccess(json));;
        //console.log(json);
        return json;
      })
      .catch(error =>
        dispatch(fetchMenusFailure(error))
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



export const fetchMenusBegin = () => ({
  type: Constants.FETCH_MENUS_BEGIN
});

export const fetchMenusSuccess = menus => ({
  type: Constants.FETCH_MENUS_SUCCESS,
  payload: { menus }
});

export const fetchMenusFailure = error => ({
  type: Constants.FETCH_MENUS_FAILURE,
  payload: { error }
});
