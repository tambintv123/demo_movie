import {
  LIST_MOVIE_REQUEST,
  LIST_MOVIE_SUCCESS,
  LIST_MOVIE_FAILED,
} from "./constants";
import { api } from "utils/apiUtil";

const actFetchData = () => {
  return (dispatch) => {
    // loading in the pending time
    dispatch(actListMovieRequest());
    api
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
      .then((res) => {
        dispatch(actListMovieSuccess(res.data.content));
      })
      .catch((error) => {
        dispatch(actListMovieFailed(error));
      });
  };
};

const actListMovieRequest = () => {
  return {
    type: LIST_MOVIE_REQUEST,
  };
};

const actListMovieSuccess = (data) => {
  return {
    type: LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

const actListMovieFailed = (error) => {
  return {
    type: LIST_MOVIE_FAILED,
    payload: error,
  };
};

export { actFetchData };
