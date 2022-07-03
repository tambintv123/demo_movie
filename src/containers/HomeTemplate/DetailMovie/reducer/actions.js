import { api } from "utils/apiUtil";
import {
  DETAIL_MOVIE_REQUEST,
  DETAIL_MOVIE_SUCCESS,
  DETAIL_MOVIE_FAILED,
} from "./constants";

const actFetchData = (id) => {
  return (dispatch) => {
    dispatch(actDetailMovieRequest());

    api
      .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((res) => dispatch(actDetailMovieSuccess(res.data.content)))
      .catch((err) => dispatch(actDetailMovieFailed(err)));
  };
};

const actDetailMovieRequest = () => {
  return {
    type: DETAIL_MOVIE_REQUEST,
  };
};

const actDetailMovieSuccess = (data) => {
  return {
    type: DETAIL_MOVIE_SUCCESS,
    payload: data,
  };
};

const actDetailMovieFailed = (error) => {
  return {
    type: DETAIL_MOVIE_FAILED,
    payload: error,
  };
};

export { actFetchData };
