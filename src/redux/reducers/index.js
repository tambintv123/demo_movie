import { combineReducers } from "redux";
import listMovieReducer from "../../containers/HomeTemplate/ListMoviePage/reducer";
import detailMovieReducer from "../../containers/HomeTemplate/DetailMovie/reducer";
import authReducer from "../../containers/AdminTemplate/AuthPage/reducer";
import addUserReducer from "../../containers/AdminTemplate/AddUserPage/reducer";

const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
  authReducer,
  addUserReducer,
});

export default rootReducer;
