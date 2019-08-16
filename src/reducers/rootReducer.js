import { combineReducers } from "redux";
import pages from "./pageReducer";
import dealers from './dealersReducer';
import misc from "./miscReducer";
import menus from "./menusReducer";

export default combineReducers({
  pages, misc, dealers, menus
});
