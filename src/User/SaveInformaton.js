import "./SaveInformation.scss";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Avatar from "../Avatar/Avatar";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function SaveInformation() {
  const myProfile = useSelector((state) => state.profileUser);
  const navigate = useNavigate();
  console.log(myProfile);
  const handleFix = () => {
    toast.info("Vui lòng điền đầy đủ thông tin của bạn muốn sửa !");
    navigate("/profile");
  };
  const handleHome = () => {
    navigate("/home");
  };
  return (
    <>
      <Header />
      <div className="save-infor-container">
        <div className="save-infor-content">
          <div className="information-details">
            <div className="information-title-main">Hồ Sơ Của Tôi</div>
            <div className="information-title">
              <p>Tên người dùng:</p>
              <p className="information-color"> {myProfile.user}</p>
            </div>
            <div className="information-title">
              <p>Email: </p>
              <p className="information-color">{myProfile.email}</p>
            </div>
            <div className="information-title">
              <p>Số điện thoại :</p>
              <p className="information-color">{myProfile.phoneNumber}</p>
            </div>
            <div className="information-title">
              <p>Địa chỉ : </p>
              <p className="information-color">{myProfile.address}</p>
            </div>
            <div className="information-title">
              <p>Giới tính: </p>
              <p className="information-color">{myProfile.gender}</p>
            </div>
            <div className="information-title">
              <p>Năm - Tháng - Ngày :</p>
              <p className="information-color">{myProfile.birthday}</p>
            </div>
            <div className="btn-fix">
              <button onClick={handleFix}>Sửa</button>
              <button onClick={handleHome}>Trang Chủ</button>
            </div>
          </div>
          <div className="information-avatar">
            <Avatar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default SaveInformation;
