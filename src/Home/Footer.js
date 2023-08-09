import "./Footer.scss";
import image19 from "../assets/image/banner19.png";
import { Buy, CustomerCare, Shopee, Transport } from "./Data";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { Information } from "./Data";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-information">
            <h2>CHĂM SÓC KHÁCH HÀNG</h2>
            {CustomerCare.map((e, index) => {
              return <p key={index}>{e}</p>;
            })}
          </div>
          <div className="footer-information">
            <h2>VỀ SHOPEE</h2>
            {Shopee.map((e, index) => {
              return <p key={index}>{e}</p>;
            })}
          </div>
          <div className="footer-information">
            <div className="child-footer-information">
              <h2>THANH TOÁN</h2>
              {Buy.map((e, index) => {
                return (
                  <span>
                    <img src={e} />
                  </span>
                );
              })}
            </div>
            <div className="child-footer-information">
              <h2>ĐƠN VỊ VẬN CHUYỂN</h2>
              {Transport.map((e, index) => {
                return (
                  <span>
                    <img src={e} />
                  </span>
                );
              })}
            </div>
          </div>
          <div className="footer-information">
            <h2>THEO DÕI CHÚNG TÔI</h2>
            <p className="footer-text">
              <CiFacebook className="footer-icons" />
              <a
                className="target_css"
                href="https://www.facebook.com/BauThuan.11.1/"
                target="_blank"
              >
                Facebook
              </a>
            </p>
            <p className="footer-text">
              <CiInstagram className="footer-icons" />
              Instagram
            </p>
            <p className="footer-text">
              <CiLinkedin className="footer-icons" />
              Linkedin
            </p>
          </div>
          <div className="footer-information">
            <h2>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</h2>
            <div className="child-footer-app">
              <div className="qa-app">
                <img src="https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472" />
              </div>
              <div className="app">
                <img src="https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163" />
                <img src="https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def" />
                <img src="https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-end">
          <div className="footer-end-child">
            <div className="end-child-first">
              <div>CHÍNH SÁCH BẢO MẬT</div>
              <div className="child-line"></div>
              <div>QUY CHẾ HOẠT ĐỘNG</div>
              <div className="child-line"></div>
              <div>CHÍNH SÁCH VẬN CHUYỂN</div>
              <div className="child-line"></div>
              <div>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</div>
            </div>
            <div className="end-child-between">
              <div className="end-child-image">
                <img src={image19} />
              </div>
              <div className="end-child-image">
                <img src={image19} />
              </div>
              <div className="end-child-image">
                <img src={image19} />
              </div>
            </div>
            <div className="end-child-last">
              {Information.map((e, index) => {
                return (
                  <div>
                    <p>{e.infor}</p>
                    <p>{e.user}</p>
                    <p>{e.business}</p>
                    <p>{e.release}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
