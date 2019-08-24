import  * as Constants from "../Constants";

const initialState = {
  dealers: [],
  deal_loading: false,
  deal_error: null

};

export default function miscReducer(
  state = initialState,
  action
) {

  //console.log(action)
  switch (action.type) {
    case Constants.FETCH_DEALERS_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        deal_loading: true,
        deal_error: null
      };

    case Constants.FETCH_DEALERS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the misc with the ones from the server
      return {
        ...state,
        deal_loading: false,
        dealers: action.payload.dealers
      };

    case Constants.FETCH_DEALERS_FAILURE:
      // The request failed, but it did stop, so set loading to "false".
      // Save the error, and we can display it somewhere
      // Since it failed, we don't have misc to display anymore, so set it empty.
      // This is up to you and your app though: maybe you want to keep the misc
      // around! Do whatever seems right.
      return {
        ...state,
        deal_loading: false,
        deal_error: action.payload.error,
        dealers: []
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
