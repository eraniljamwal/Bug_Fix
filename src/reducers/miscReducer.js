import  * as Constants from '../Constants';
  
  const initialState = {
    misc: [],
    loading: false,
    error: null
  
  };
  
  export default function miscReducer(
    state = initialState,
    action
  ) {
    switch (action.type) {
      case Constants.FETCH_MISC_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case Constants.FETCH_MISC_SUCCESS:
        // All done: set loading "false".
        // Also, replace the misc with the ones from the server
        return {
          ...state,
          loading: false,
          misc: action.payload.misc
        };
  
      case Constants.FETCH_MISC_FAILURE:
        // The request failed, but it did stop, so set loading to "false".
        // Save the error, and we can display it somewhere
        // Since it failed, we don't have misc to display anymore, so set it empty.
        // This is up to you and your app though: maybe you want to keep the misc
        // around! Do whatever seems right.
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          misc: []
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }
  