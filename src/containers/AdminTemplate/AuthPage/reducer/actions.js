import { AUTH_FAILED, AUTH_SUCCESS, AUTH_REQUEST } from "./constants";
import { api } from "../../../../utils/apiUtil";

const actLogin = (user, navigate) => {
  return (dispatch) => {
    dispatch(actAuthRequest());
    api
      .post("QuanLyNguoiDung/DangNhap", user)
      .then((res) => {
        // Check ma loai nguoi dung
        if (res.data.content.maLoaiNguoiDung === "KhachHang") {
          // bao loi
          return Promise.reject({
            response: {
              data: {
                content: "Tai Khoan khong co quyen truy cap !!!",
              },
            },
          });
        }

        dispatch(actAuthSuccess(res.data.content));

        // luu thong tin user vao` localStorage
        localStorage.setItem("UserAdmin", JSON.stringify(res.data.content));

        // redirect to /admin
        navigate("/admin", { replace: true });
      })
      .catch((err) => dispatch(actAuthFailed(err)));
  };
};

const actAuthRequest = () => {
  return {
    type: AUTH_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: AUTH_SUCCESS,
    payload: data,
  };
};

const actAuthFailed = (error) => {
  return {
    type: AUTH_FAILED,
    payload: error,
  };
};

export { actLogin };
