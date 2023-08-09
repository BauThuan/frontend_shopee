import "./Support.scss";
// import "../Authentication/Login.scss";
import Footer from "../Home/Footer";
import banner25 from "../assets/image/banner25.png";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { FaCcPaypal, FaShoppingCart } from "react-icons/fa";
import { FiTag, FiSlack } from "react-icons/fi";
// import { SlPeople } from "react-icons/si";
import { BsPeopleFill, BsPersonVcard } from "react-icons/bs";
import { AiTwotoneGift } from "react-icons/ai";
import { TbTransform, TbTransformFilled } from "react-icons/tb";
import { toast } from "react-toastify";
import { Supports } from "../Home/Data";
import { useSelector } from "react-redux";
function Support() {
  const isLoggedIn = useSelector((state) => state.Login.isLoggedIn);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const [notification, setNotification] = useState("");
  const [show, setShow] = useState(false);
  const [save, setSave] = useState([]);
  const handleChangeSupport = (e) => {
    setNotification(e.target.value);
  };
  const handleSearch = () => {
    if (notification === "") {
      toast.error("Bạn chưa nhập vào thông tin tìm kiếm !");
    } else {
      if (!isLoggedIn) {
        toast.error("Bạn cần phải đăng nhập !");
      } else {
        setShow(true);
        setSave(Supports);
        toast.success("Gửi thông tin thành công !");
      }
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
            <p>Trung tâm Hỗ Trợ Shopee VN</p>
          </div>
        </div>
      </div>
      <div className="error-container">
        <div className="error-content">
          <p>Xin chào, Shopee có thể hỗ trợ gì cho bạn ?</p>
          <div>
            <input
              type="text"
              onChange={handleChangeSupport}
              placeholder="Nhập từ khóa bạn muốn tìm kiếm"
            />
            <BiSearch onClick={handleSearch} className="err-icons-search" />
          </div>
        </div>
      </div>
      {show &&
        save.map((e, index) => {
          return (
            <div className="search-notification">
              <div className="notification-content">{e}</div>
            </div>
          );
        })}
      <Slider className="slider-text" {...settings}>
        <div>
          <p>
            ừ ngày 19/05/2023, Người mua có thể ĐỒNG KIỂM (*) khi nhận hàng từ
            Shopee. (*) ĐỒNG KIỂM là kiểm tra tình trạng bên ngoài, số lượng của
            sản phẩm trong đơn hàng và KHÔNG được mở tem chống hàng giả, niêm
            phong riêng của sản phẩm, KHÔNG sử dụng/dùng thử sản phẩm…
          </p>
        </div>
        <div>
          <p>
            [Cảnh báo] Hãy thận trọng với các thông báo trúng thưởng/tặng quà
            miễn phí dưới danh nghĩa Shopee. Xem chi tiết & hướng dẫn phòng
            tránh.
          </p>
        </div>
        <div>
          <p>
            [Lưu ý khi nhận hàng] Nhớ đối chiếu các thông tin: mã đơn hàng, mã
            vận đơn, trạng thái đơn hàng và số tiền (nếu có) giữa gói hàng với
            thông tin có trên Ứng dụng Shopee, để đảm bảo nhận đúng hàng đã đặt
            bạn nhé!
          </p>
        </div>
        <div>
          <p>
            [Cảnh báo] Hãy thận trọng khi nhận được lời mời làm việc từ các đối
            tượng lừa đảo thông qua tin nhắn, gọi điện, nhóm chat hoặc các trang
            Mạng xã hội. Nếu bạn nhận được tin nhắn đáng ngờ, hãy thông báo ngay
            với Shopee hoặc liên hệ Bộ phận CSKH qua số 1900 1221 để được hỗ trợ
            sớm nhất.
          </p>
        </div>
        <div>
          <p>
            Trang này KHÔNG THỂ tìm kiếm thông tin chi tiết đơn hàng, sản phẩm
            khuyến mãi hoặc số điện thoại. Để tra những nội dung trên, bạn có
            thể vào trang chủ shopee.vn hoặc tải ứng dụng di động...
          </p>
        </div>
      </Slider>
      <div className="error-category">
        <div className="error-category-content">
          <div> Danh Mục</div>
          <div>
            <div>
              <AiTwotoneGift className="gift" />
              Mua Sắm Cùng Shopee
            </div>
            <div>
              <FiTag className="tag" />
              Khuyến Mãi & Ưu Đãi
            </div>
            <div>
              <FaCcPaypal className="paypal" />
              Thanh Toán
            </div>
            <div>
              <TbTransformFilled className="transform" /> Đơn Hàng & Vận Chuyển
            </div>
            <div>
              <FiSlack className="slack" />
              Trả Hàng & Hoàn Tiền
            </div>
            <div>
              <BsPeopleFill className="fill" /> Người Bán & Đối Tác
            </div>
            <div>
              <BsPersonVcard className="card" /> Thông Tin Chung
            </div>
            <div>
              <FaShoppingCart className="shopping" /> Mua sắm cùng Shopee
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Support;
