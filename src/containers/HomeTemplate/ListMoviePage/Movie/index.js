import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Movie extends Component {
  render() {
    const { movie } = this.props;

    return (
      <>
        <div className="col-md-3 mt-5">
          <div className="card">
            <img
              className="card-img-top"
              src={movie.hinhAnh}
              alt={movie.hinhAnh}
            />
            <div className="card-body">
              <h4 className="card-title text-center">{movie.tenPhim}</h4>
            </div>
            <div className="card-footer">
              <Link className="btn btn-success" to={`/detail/${movie.maPhim}`}>
                Detail
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
