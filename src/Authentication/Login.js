import "./Login.scss";
import banner25 from "../assets/image/banner25.png";
import banner24 from "../assets/image/banner24.png";
import banner26 from "../assets/image/banner26.png";
import banner27 from "../assets/image/banner27.png";
import banner28 from "../assets/image/banner28.png";
import facebook from "../assets/image/facebook.png";
import google from "../assets/image/google.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import Footer from "../Home/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EditUserLogin } from "../Redux/Action";
import { toast } from "react-toastify";
function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [shows, setShows] = useState(false);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [eyeOff, setEyeOff] = useState(true);
  const [eyeOn, setEyeOn] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [messageErrorAccount, setMessageErrorAccount] = useState(false);
  const [messageErrorPassword, setMessageErrorPassword] = useState(false);
  const dispatch = useDispatch();
  const handleLogin = async () => {
    const login = await axios.post("http://localhost:5000/api/auth/login", {
      email: account,
      password: password,
    });
    if (login.data.errCode === 0) {
      const user = login.data.user;
      console.log(user);
      dispatch(EditUserLogin(user));
      // console.log(EditUserLogin);
      navigate("/profile");
      toast.info(
        "Vui lòng ưu tiên cập nhật ảnh đại diện, điền đầy đủ thông tin cá nhân  !"
      );
    } else {
      toast.error(login.data.messageVI);
    }
  };
  const handleChange = () => {
    setShow(false);
    setShows(true);
  };
  const handleChanges = () => {
    setShow(true);
    setShows(false);
  };
  const handleAccount = (e) => {
    setAccount(e.target.value);
    handleCheck(e.target.value, password); // truyền đối số vào hàm handleCheck
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    handleCheck(account, e.target.value); // truyền đối số vào hàm handleCheck
  };
  const handleEyeOff = () => {
    setEyeOff(false);
    setEyeOn(true);
    setShowPass(true);
  };
  const handleEyeOn = () => {
    setEyeOff(true);
    setEyeOn(false);
    setShowPass(false);
  };
  const handleCheck = (account, password) => {
    if (account === "" && password === "") {
      setDisabled(true);
      setMessageErrorAccount(true);
      setMessageErrorPassword(true);
      return;
    }
    if (account !== "" && password === "") {
      setDisabled(true);

      setMessageErrorAccount(false);
      setMessageErrorPassword(true);
      return;
    }
    if (account === "" && password !== "") {
      setDisabled(true);
      setMessageErrorAccount(true);
      setMessageErrorPassword(false);
      return;
    }
    if (account !== "" && password !== "") {
      setDisabled(false);
      setMessageErrorAccount(false);
      setMessageErrorPassword(false);
      return;
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="login-header">
        <div className="login-content">
          <div className="login-logo">
            <Link className="link-image" to="/home">
              <img src={banner25} />
            </Link>
          </div>
          <div className="login-help">
            <p>Bạn cần giúp đỡ ?</p>
          </div>
        </div>
      </div>
      <div className="login-body">
        <div className="login-up"></div>
        <div className="login-image">
          <img src={banner24} />
        </div>
        <div className="login-information">
          {show && (
            <div className="login">
              <div className="login-option">
                <div className="option-title">Đăng Nhập</div>
                <div className="login-qr">
                  <div>Đăng nhập với mã QR </div>
                  <img onClick={handleChange} src={banner26} />
                </div>
              </div>
              <div className="login-input">
                <input
                  type="text"
                  onChange={handleAccount}
                  placeholder="Email/Số điện thoại/Tên đăng nhập"
                />
                {messageErrorAccount && (
                  <p style={{ color: "red" }}>
                    Vui lòng điền đầy đủ thông tin account !
                  </p>
                )}
              </div>
              <div className="login-password">
                <input
                  type={showPass ? "text" : "password"}
                  onChange={handlePassword}
                  placeholder="Mật khẩu"
                />
                {messageErrorPassword && (
                  <p style={{ color: "red" }}>
                    Vui lòng điền đầy đủ thông tin password !
                  </p>
                )}
                {eyeOff && (
                  <FiEyeOff onClick={handleEyeOff} className="icons" />
                )}
                {eyeOn && <FiEye onClick={handleEyeOn} className="icons" />}
              </div>
              <div className="login-login">
                <button
                  onClick={handleLogin}
                  className={disabled ? "disabled" : "isdisabled"}
                  disabled={disabled ? true : false} // ngăn cản sự kiện click
                >
                  Đăng Nhập
                </button>
              </div>
              <div className="forgot-password">
                <div>Quên mật khẩu</div>
                <div>Đăng nhập bằng SMS</div>
              </div>
              <div className="login-image-fb">
                <img src={facebook} />
                <img src={google} />
              </div>
              <div className="forgot-register">
                <div>
                  Bạn mới biết đến Shopee?{" "}
                  <Link className="link-css" to="/register">
                    Đăng ký
                  </Link>
                </div>
              </div>
            </div>
          )}
          {shows && (
            <div className="login">
              <div className="login-option">
                <div className="option-title">Đăng Nhập QR</div>
                <div className="login-qr">
                  <div>Đăng nhập với mật khẩu </div>
                  <img onClick={handleChanges} src={banner27} />
                </div>
              </div>
              <div className="qr-camera">
                <img src={banner28} />
              </div>
              <div className="howto-qr">Làm Thế Nào Để Quét Mã QR ?</div>
              <div className="forgot-register">
                <div>
                  Bạn mới biết đến Shopee? <Link to="/">Đăng ký</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Login;
