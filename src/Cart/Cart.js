import Footer from "../Home/Footer";
import Header from "../Home/Header";
import banner25 from "../assets/image/banner25.png";
import { useEffect, useState } from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Cart() {
  const navigate = useNavigate();
  const [listProduct, setListProduct] = useState([]);
  const [total, setTotal] = useState(null);
  const [show, setShow] = useState(false);
  const product = useSelector((state) => state.Product);
  const myProfile = useSelector((state) => state.profileUser);
  console.log("profile", myProfile);
  const handleOnChangeCheckBox = (e) => {
    const newTotal = product.reduce((acc, arr) => {
      console.log(arr.pay);
      const Price = parseFloat(arr.pay.replace(/\./g, ""));
      if (!isNaN(Price)) {
        return acc + Price;
      }
      return acc;
    }, 0);
    setTotal(newTotal.toLocaleString());
    setShow(!show);
  };
  const handlePurchase = () => {
    if (total === null) {
      toast.error("Vui lòng chọn tất cả sản phẩm bạn muốn mua !");
    } else {
      if (!myProfile || !myProfile.user || !myProfile.email) {
        toast.error("Bạn chưa điền đầy đủ thông tin cá nhân !");
      } else {
        toast.success("Đặt hàng thành công !");
        navigate("/home");
      }
    }
  };
  const handleChange = (event) => {
    const { value, checked } = event.target;
    let productList = listProduct.map((productItem) => {
      return productItem.value === value
        ? { ...productItem, isChecked: checked }
        : productItem;
    });
    setListProduct(productList);
  };
  console.log("product ", product);
  useEffect(() => {
    setListProduct(product);
  }, []);
  return (
    <>
      <Header />
      <div className="cart-container">
        <div className="cart-content">
          <div className="cart-text">
            <img src={banner25} />
            <h1> Shopee Giỏ Hàng</h1>
          </div>
          <div className="all-product-cart">
            <div className="notification-text">
              <p>
                Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận
                chuyển bạn nhé
              </p>
            </div>
            {product.map((product, index) => {
              return (
                <div className=" discount-code" key={index}>
                  <div>
                    <input
                      type="checkbox"
                      value={product.id}
                      checked={product.isChecked}
                      onChange={handleChange}
                    />
                    SẢN PHẨM
                  </div>
                  <div className="information-product-image">
                    <img src={product.image} alt="ảnh" />
                    <p>
                      <i>{product.information}</i>
                    </p>
                  </div>
                  <div>
                    size: <b>{product.size}</b>
                  </div>
                  <div>
                    Màu sắc: <i>{product.color}</i>
                  </div>
                  <div className="product-price">Giá:{product.price}</div>
                  <div className="quantity">
                    Số lượng: <i>{product.quantity}</i>
                  </div>
                  <div className="purchases">
                    <i>{product.purchases}</i>
                  </div>
                  <div>
                    {/* .000Đ */}
                    Tổng tiền: <b>{product.pay} VND</b>
                  </div>
                </div>
              );
            })}
            <div className=" product"></div>
            <div className=" product-infor-code"></div>
          </div>
        </div>
        <div className="purchase-content">
          <div className="select-all">
            <p>Chọn tất cả các sản phẩm: </p>
            <input
              type="checkbox"
              name="allSelector"
              onClick={handleOnChangeCheckBox}
            />
          </div>
          <div className="pay">
            <p>
              Tổng số tiền:<b className="total">{show ? total : ""} VND</b>
            </p>
            <button onClick={handlePurchase}>Mua Hàng</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Cart;
