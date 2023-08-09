import "./Register.scss";
import { Link } from "react-router-dom";
import banner25 from "../assets/image/banner25.png";
import banner24 from "../assets/image/banner24.png";
import Footer from "../Home/Footer";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Register() {
  const navigate = useNavigate();
  const [infor, setInfor] = useState({
    email: "",
    password: "",
    rePassword: "",
  });
  const handleRegister = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(infor.email)) {
      toast.error("Định dạng email của bạn chưa đúng !");
    } else {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          email: infor.email,
          password: infor.password,
          rePassword: infor.rePassword,
        }
      );
      if (response.data.errCode === 0) {
        navigate("/login");
        toast.success(response.data.messageVI);
      } else {
        toast.error(response.data.messageVI);
      }
    }
  };
  const handleOnChangeInput = (e, key) => {
    setInfor({
      ...infor,
      [key]: e.target.value,
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="register-header">
        <div className="register-content">
          <div className="register-logo">
            <Link className="link-image" to="/home">
              <img src={banner25} />
            </Link>
          </div>
          <div className="register-help">
            <p>Bạn cần giúp đỡ ?</p>
          </div>
        </div>
      </div>
      <div className="register-body">
        <div className="register-up"></div>
        <div className="register-image">
          <img src={banner24} />
        </div>
        <div className="register-information">
          <div className="register">
            <div className="register-option">
              <div className="option-title">Đăng Ký</div>
            </div>
            <div className="register-input">
              <input
                type="text"
                onChange={(e) => handleOnChangeInput(e, "email")}
                placeholder="Email đăng ký"
              />
            </div>
            <div className="register-password">
              <input
                type="password"
                onChange={(e) => handleOnChangeInput(e, "password")}
                placeholder="Mật khẩu mới"
              />
            </div>
            <div className="register-password">
              <input
                type="password"
                onChange={(e) => handleOnChangeInput(e, "rePassword")}
                placeholder="Nhập lại mật khẩu"
              />
            </div>
            <div className="register-register">
              {/* className={disabled ? "disabled" : "isdisabled" */}
              <button className="isdisabled" onClick={handleRegister}>
                Đăng Ký
              </button>
            </div>
            <div className="forgot-password">
              <div>Điều khoản dịch vụ</div>
              <div>Chính sách bảo mật</div>
            </div>
            <div className="forgot-register">
              <div>
                Bạn đã có tài khoản ?{" "}
                <Link className="link-css" to="/login">
                  Đăng Nhập
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Register;
