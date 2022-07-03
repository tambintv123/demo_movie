import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { actFetchData } from "./reducer/actions";
import { useSelector, useDispatch } from "react-redux";

function DetailMovie() {
  const data = useSelector((state) => state.detailMovieReducer.data);
  const loading = useSelector((state) => state.detailMovieReducer.loading);
  const dispatch = useDispatch();

  // Lay id tu` url
  const params = useParams();

  useEffect(() => {
    dispatch(actFetchData(params.id));
  }, []);

  const renderDetailMovie = () => {
    if (loading) {
      return <div className="display-4 text-center text-primary">Loading</div>;
    }
    return (
      <div className="card">
        <img
          className="card-img-top"
          style={{ height: 700 }}
          src={data?.hinhAnh}
          alt={data?.hinhAnh}
        />
        <div className="card-body">
          <h4 className="card-title">{data?.tenPhim}</h4>
          <p className="card-text">{data?.moTa}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="container">
      <h1 className="text-center">DetailMovie</h1>
      <div>{renderDetailMovie()} </div>
    </div>
  );
}

export default DetailMovie;
