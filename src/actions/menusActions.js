//import axios from "axios";
//const menusURL = 'http://wpstage.forcefield.gpbpittest.com/menus.php?zip_code=';
const menusURL = 'http://wpstage.forcefield.gpbpittest.com/wp-json/menus/v1/menus/main-menu';
function getMenus() {
  return fetch(menusURL)
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

export const FETCH_MENUS_BEGIN = "FETCH_MENUS_BEGIN";
export const FETCH_MENUS_SUCCESS =  "FETCH_MENUS_SUCCESS";
export const FETCH_MENUS_FAILURE =  "FETCH_MENUS_FAILURE";

export const fetchMenusBegin = () => ({
  type: FETCH_MENUS_BEGIN
});

export const fetchMenusSuccess = menus => ({
  type: FETCH_MENUS_SUCCESS,
  payload: { menus }
});

export const fetchMenusFailure = error => ({
  type: FETCH_MENUS_FAILURE,
  payload: { error }
});
