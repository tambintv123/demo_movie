import React, { Component } from "react";
import Movie from "./Movie";
import { connect } from "react-redux";
import { actFetchData } from "./reducer/actions";
import Loader from "components/Loader";

class ListMoviePage extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  renderListMovie = () => {
    const { data, loading } = this.props;
    if (loading) {
      return <Loader />;
    }
    return data?.map((movie) => <Movie key={movie.maPhim} movie={movie} />);
  };

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h1 className="text-center mt-2">List Movie Page</h1>
        <div className="row mt-5">{this.renderListMovie()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.listMovieReducer.data,
    loading: state.listMovieReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      dispatch(actFetchData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
