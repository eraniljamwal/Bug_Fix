import { combineReducers } from "redux";
import pages from "./pageReducer";
import misc from "./miscReducer";

export default combineReducers({
  pages, misc
});
