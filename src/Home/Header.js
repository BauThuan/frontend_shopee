import "./Header.scss";
import "../User/UserHeader.scss";
import { CiFacebook, CiGlobe, CiInstagram } from "react-icons/ci";
import { FiBell, FiHelpCircle, FiShoppingCart, FiSearch } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { ListMenu } from "./Data";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { EditUserLogout } from "../Redux/Action";
import { useNavigate } from "react-router-dom";
import Name from "../Name/Name";
import Avatar from "../Avatar/Avatar";
function Header() {
  const product = useSelector((state) => state.Product);
  const [showInfor, setShowInfor] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [SearchText, setSearchText] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isLoggedIn = useSelector((state) => state.Login.isLoggedIn);
  const handleLogOut = () => {
    dispatch(
      EditUserLogout({
        type: "UpdateLogout",
      })
    );
    window.location.reload(); // trình duyệt sẽ tải lại toàn bộ trang web hiện tại từ máy chủ
    navigate("/home");
    window.scrollTo(0, 0);
  };
  const handleClickMenu = () => {
    setShow(!show);
  };
  const handleClickHide = () => {
    setShow(!show);
  };
  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };
  const handleSearchProduct = () => {
    toast.info(
      "Xin lỗi vì sự bất tiện này! Ứng dụng đang trong quá trình hoàn thành"
    );
  };
  return (
    <>
      <div className="home-header-container">
        <div className="home-header-content">
          <div className="home-header-firstly">
            <div className="firstly-up">
              <div className="shope-title">
                <div>Kênh Người bán</div>
              </div>
              <div className="right-line"></div>
              <div className="shope-title">
                <div>Trở thành Người bán Shopee</div>
              </div>
              <div className="right-line"></div>
              <div className="shope-title">
                <div>Tải ứng dụng</div>
              </div>
              <div className="right-line"></div>
              <div className="shope-title">
                <div>
                  Kết nối <CiFacebook className="icons-icons" />
                  <CiInstagram className="icons-icons" />
                </div>
              </div>
            </div>
            <div className="firstly-down">
              <div className="shope-title-down">
                <div>
                  <FiBell className="icons-down" /> Thông báo
                </div>
              </div>
              <div className="right-line-down"></div>
              <div className="shope-title-down">
                <div>
                  <FiHelpCircle className="icons-down" />
                  <Link className="link-css" to="/support">
                    Hỗ trợ
                  </Link>
                </div>
              </div>
              <div className="right-line-down"></div>
              <div className="shope-title-down">
                <div>
                  <CiGlobe className="icons-down" /> Tiếng việt
                  <div className="child-menu">
                    <p> VN</p>
                    <p>EN</p>
                  </div>
                </div>
              </div>
              <div className="right-line-down"></div>
              {isLoggedIn ? (
                <>
                  <div className="shope-title-avatar">
                    <Avatar />
                    <div className="child-user-menu">
                      <p>
                        <Link
                          onClick={handleLogOut}
                          to="/home"
                          className="user-menu-text"
                        >
                          Đăng xuất
                        </Link>
                      </p>
                      <p>
                        <Link className="user-menu-text" to="/support">
                          Báo lỗi
                        </Link>
                      </p>
                      <p>
                        <Link className="user-menu-text" to="/saveInformation">
                          Thông tin cá nhân
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="shope-title-down">
                    <Link className="link-css" to="/profile">
                      <Name />
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="shope-title-down">
                    <div>
                      <Link className="link-css" to="/login">
                        Đăng Nhập
                      </Link>
                    </div>
                  </div>
                  <div className="right-line-down"></div>
                  <div className="shope-title-down">
                    <div>
                      <Link className="link-css" to="/register">
                        Đăng Ký
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="home-header-between">
            <div className="header-logo-between">
              <Link to="/home">
                <img src="https://storage.googleapis.com/ops-shopee-files-live/live/affiliate-blog/2019/05/logo-full-white.png" />
              </Link>
            </div>
            <div className="header-search-between">
              <input
                type="text"
                placeholder="Đăng ký nhận ngay voucher bạn mới đến 70K ! "
              />
              <FiSearch
                onClick={handleSearchProduct}
                className="search-icon-between"
              />
            </div>
            <div className="header-icons-between">
              <Link to="/cart">
                <FiShoppingCart className="icons-between" />
                {product == 0 ? (
                  ""
                ) : (
                  <div className="notification">{product.length}</div>
                )}
              </Link>
            </div>
          </div>
          <div className="home-header-last">
            {ListMenu.map((list, index) => {
              return (
                <div className="list-last" key={index}>
                  {list}
                </div>
              );
            })}
          </div>
        </div>
        {/* responsive  Tablet & mobile */}
        <div className="home-header-content-responsive">
          <div className="menu-icons" onClick={handleClickMenu}>
            <AiOutlineMenu />
          </div>
          <div className="search-menu">
            <input
              type="text"
              onChange={handleSearchText}
              value={SearchText}
              placeholder="Đăng ký ngay để nhận voucher 70K miễn phí !"
            />
            <AiOutlineSearch
              onClick={handleSearchProduct}
              className="icons-search"
            />
          </div>
          <div className="cart-menu">
            <Link style={{ color: "#ffffff" }} to="/cart">
              <FiShoppingCart className="icons-cart" />
            </Link>
          </div>
        </div>
        {show && (
          <div onClick={handleClickHide} className="menu-left">
            <div className="list-menu">
              <div className="logo-menu">
                <div className="logo-image">
                  <Link to="/home">
                    <img src="https://storage.googleapis.com/ops-shopee-files-live/live/affiliate-blog/2019/05/logo-full-white.png" />
                  </Link>
                </div>
              </div>
              {isLoggedIn ? (
                <>
                  <div className="menu-avatar">
                    <div className="avatar-login">
                      <img
                        src="https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-1.jpg"
                        alt="avatar"
                      />
                      <div className="name-user">
                        <Link className="name-link" to="/profile">
                          <Name />
                        </Link>
                      </div>
                    </div>
                    <div className="logout-menu">
                      <p>
                        <Link
                          onClick={handleLogOut}
                          to="/home"
                          className="logout-link"
                        >
                          Đăng xuất
                        </Link>
                      </p>
                      <p>
                        <Link className="logout-link" to="/support">
                          Báo lỗi
                        </Link>
                      </p>
                      <p>
                        <Link className="logout-link" to="/profile">
                          Thông tin cá nhân
                        </Link>
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="login-menu-child">
                    <div>
                      <Link className="login-link" to="/login">
                        Đăng Nhập
                      </Link>
                    </div>
                  </div>
                  <div className="right-line-down"></div>
                  <div className="login-menu-child">
                    <div>
                      <Link className="login-link" to="/register">
                        Đăng Ký
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        {/* responsive */}
      </div>
    </>
  );
}
export default Header;
