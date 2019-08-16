import {
  FETCH_PAGES_BEGIN,
  FETCH_PAGES_SUCCESS,
  FETCH_PAGES_FAILURE
} from "../actions/pagesActions";

const initialState = {
  pages: [],
  loading: false,
  error: null,
  dealers: []

};

export default function pageReducer(
  state = initialState,
  action
) {

 

  switch (action.type) {
    case FETCH_PAGES_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PAGES_SUCCESS:
      // All done: set loading "false".
      // Also, replace the pages with the ones from the server
      return {
        ...state,
        loading: false,
        pages: action.payload.pages
      };

    case FETCH_PAGES_FAILURE:
      // The request failed, but it did stop, so set loading to "false".
      // Save the error, and we can display it somewhere
      // Since it failed, we don't have pages to display anymore, so set it empty.
      // This is up to you and your app though: maybe you want to keep the pages
      // around! Do whatever seems right.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        pages: []
      };

    

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
