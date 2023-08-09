import "./Profile.scss";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { EditUserInformation } from "../Redux/Action";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Name from "../Name/Name";
import {
  BsPencilFill,
  BsFillPersonFill,
  BsFillFilePersonFill,
  BsBank2,
  BsFillGeoAltFill,
  BsSliders2,
} from "react-icons/bs";

function Profile() {
  const myProfile = useSelector((state) => state.profileUser);
  const [user, setUser] = useState(myProfile);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    address: "",
    gender: "",
    birthday: "",
  });
  const [showImage, setShowImage] = useState(true);
  const [image, setImage] = useState(null);
  const handleChange = (e, key) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };
  const handleSave = () => {
    if (
      formData.userName &&
      formData.email &&
      formData.phoneNumber &&
      formData.address &&
      formData.gender &&
      formData.birthday &&
      image.preview
    ) {
      // Check email + phone
      if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
        !/^[0-9]{10}$/.test(formData.phoneNumber)
      ) {
        toast.error("Định dạng email và số điện thoại không đúng !");
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        toast.error("Định dạng email không đúng !");
      } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
        toast.error("Định dạng số điện thoại không đúng");
      } else {
        dispatch(
          EditUserInformation({
            userName: formData.userName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            address: formData.address,
            gender: formData.gender,
            birthday: formData.birthday,
            imageAvatar: image.preview,
          })
        );
        toast.success("Cập nhật thông tin thành công !");
        navigate("/saveInformation");
      }
    } else {
      if (!formData.userName) {
        toast.error("Vui lòng điền đầy đủ tên người dùng!");
      } else if (!formData.email) {
        toast.error("Vui lòng điền đầy đủ email !");
      } else if (!formData.phoneNumber) {
        toast.error("Vui lòng điền đầy đủ số diện thoại !");
      } else if (!formData.address) {
        toast.error("Vui lòng điền đầy đủ địa chỉ ! ");
      } else if (!formData.gender) {
        toast.error("Vui lòng chọn đầy đủ giới tính !");
      } else if (!formData.birthday) {
        toast.error("Vui lòng điền ngày tháng năm sinh !");
      }
    }
  };
  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.preview);
    };
  }, []);
  const handleSelectImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setShowImage(false);
    setImage(file);
  };
  // luư value của input vào state để có thể thay đổi được
  return (
    <>
      <Header />
      <div className="profile-container">
        <div className="profile-content">
          <div className=" profile-menu">
            <div className="profile-avatar">
              <div className="avatar-user">
                <img
                  src={
                    // lỗi đang nằm ở đây
                    showImage
                      ? "https://www.mcards.vn/images/avatar_KHCN.png"
                      : image && image.preview
                  }
                />
              </div>
              <div className="avatar-name">
                <Name />
                <p>
                  <BsPencilFill />
                  Sửa hồ sơ
                </p>
              </div>
            </div>
            <div className="profile-option">
              <div>
                <BsFillPersonFill className="icons-fill" />
                Tài khoản của tôi
              </div>
              <div>
                <BsFillFilePersonFill className="icons-fill" />
                Hồ Sơ
              </div>
              <div>
                <BsBank2 className="icons-fill" />
                Ngân Hàng
              </div>
              <div>
                <BsFillGeoAltFill className="icons-fill" />
                Địa Chỉ
              </div>
              <div>
                <BsSliders2 className="icons-fill" />
                Đổi Mật Khẩu
              </div>
            </div>
          </div>
          <div className="profile-information">
            <div className="information">
              <h1>Sửa Hồ Sơ Của Bạn</h1>
              <p>Quản lý thông tin hồ sơ bảo mật tài khoản</p>
            </div>
            <div className="detailed-profile">
              <div className="user-details">
                <div>
                  Tên người dùng
                  <input
                    type="text"
                    onChange={(e) => handleChange(e, "userName")}
                  />
                </div>
                <div>
                  Email
                  <input
                    onChange={(e) => handleChange(e, "email")}
                    type="email"
                  />
                </div>
                <div>
                  Số điện thoại
                  <input
                    onChange={(e) => handleChange(e, "phoneNumber")}
                    type="text"
                  />
                </div>
                <div>
                  Địa Chỉ
                  <input
                    onChange={(e) => handleChange(e, "address")}
                    type="text"
                  />
                </div>
                <div>
                  Giới tính
                  <select onChange={(e) => handleChange(e, "gender")}>
                    <option>...</option>
                    <option>Nam</option>
                    <option>Nữ</option>
                    <option>Khác</option>
                  </select>
                </div>
                <div>
                  Ngày sinh
                  <input
                    onChange={(e) => handleChange(e, "birthday")}
                    type="date"
                  />
                </div>
                <div>
                  <button onClick={handleSave} className="btn">
                    Lưu
                  </button>
                </div>
              </div>
              <div className="user-image-update">
                <p style={{ color: "red", fontSize: "0.9rem" }}>
                  Vui lòng chọn ảnh đại diện !
                </p>
                <div className="show-image">
                  <img
                    // kiểm tra ảnh
                    src={
                      showImage
                        ? "https://www.mcards.vn/images/avatar_KHCN.png"
                        : image && image.preview
                    }
                  />
                </div>
                <div className="choose-photo">
                  <label htmlFor="image">Chọn Ảnh</label>
                  <input
                    type="file"
                    onChange={handleSelectImage}
                    id="image"
                    hidden
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Profile;

//  <label htmlFor="image">Chọn ảnh</label>
{
  /* <input type="file" id="image" hidden /> */
}
// => Làm chọn ảnh
