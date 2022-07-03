import React, { useRef } from "react";
import { actLogin } from "./reducer/actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";

export default function AuthPage() {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.authReducer);
  // useNavigate() giup chuyen huong
  const navigate = useNavigate();

  console.log(props);

  const ref = useRef({
    taiKhoan: "",
    matKhau: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    ref.current[name] = value;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(actLogin(ref.current, navigate));
  };

  const renderNoti = () => {
    const { error } = props;
    return (
      error && (
        <div className="alert alert-danger">{error.response.data.content}</div>
      )
    );
  };

  if (props.loading === true) {
    return <div className="text-center">Loading ....</div>;
  }

  if (localStorage.getItem("UserAdmin"))
    return <Navigate replace to="/admin" />;

  return (
    <div className="container">
      <h1 className="text-center">Login</h1>
      <div className="row">
        <div className="col-md-6 mx-auto">
          {/* Render error */}
          {renderNoti()}
          <form onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="taiKhoan"
                className="form-control"
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="matKhau"
                className="form-control"
                onChange={handleOnChange}
              />
            </div>
            <button className="btn btn-success">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
