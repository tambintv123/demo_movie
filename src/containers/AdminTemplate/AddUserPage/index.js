import React, { useRef } from "react";
import { actAddUser } from "./reducer/actions";
import { useDispatch, useSelector } from "react-redux";

export default function AddUserPage() {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.addUserReducer);

  const ref = useRef({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  });

  console.log(props);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    ref.current[name] = value;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(actAddUser(ref.current));
  };

  const renderNoti = () => {
    const { error } = props;
    return (
      error && (
        <div className="alert alert-danger">{error.response.data.content}</div>
      )
    );
  };

  return (
    <div className="container mt-4 mx-auto">
      <h1 className="text-center">Add User</h1>
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
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="soDt"
            className="form-control"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label>Ho Ten</label>
          <input
            type="text"
            name="hoTen"
            className="form-control"
            onChange={handleOnChange}
          />
        </div>
        <button className="btn btn-success ">Add User</button>
      </form>
    </div>
  );
}
