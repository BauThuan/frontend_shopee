import "./ProductDetails.scss";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import banner17 from "../assets/image/banner17.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ListOfProducts, Category, Sale } from "../Home/Data";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Action";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const Login = useSelector((state) => state.Login);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [list, setList] = useState([]);
  const handleCheckColor = (color) => {
    setSelectedColor(color);
  };
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handleCheckSize = (size) => {
    setSelectedSize(size);
  };

  const handleReduce = () => {
    if (quantity > 0) {
      return setQuantity(quantity - 1);
    }
  };
  const handleIncrease = () => {
    return setQuantity(quantity + 1);
  };
  // Phương thức includes() kiểm tra xem một mảng có chứa một giá trị cụ thể hay không.
  useEffect(() => {
    const idListCategory = Category.map((e) => e.id);
    const idSale = Sale.map((e) => e.id);
    if (idListCategory.includes(+id)) {
      const ListCategory = Category.find((item) => item.id === +id); // kiểm tra xem id trong params có trùng với id trong mảng hay không ?
      setList([ListCategory]);
    } else {
      if (idSale.includes(+id)) {
        const ListSale = Sale.find((item) => item.id === +id);
        setList([ListSale]);
      } else {
        const ListProduct = ListOfProducts.find((item) => item.id === +id);
        setList([ListProduct]);
      }
    }
  }, [id]);
  const handleMoreCart = (product) => {
    if (!Login.user.id) {
      return toast.error("Bạn cần phải đăng nhập !");
    } else {
      if (!selectedColor && !selectedSize && !quantity) {
        toast.error("Vui lòng chọn đủ màu sắc, kích cỡ, số lượng !");
      } else if (!selectedColor) {
        toast.error("Vui lòng chọn màu sắc cho sản phẩm !");
      } else if (!selectedSize) {
        toast.error("Vui lòng chọn kích cỡ cho sản phẩm !");
      } else if (!quantity) {
        toast.error("Vui lòng chọn số lượng mà bạn muốn mua !");
      } else {
        const productWithColor = {
          ...product,
          color: selectedColor,
          size: selectedSize,
          quantity: quantity,
          pay: (parseFloat(product.price) * parseFloat(quantity))
            .toFixed(3) // hàm tính tiền đang có vấn đề
            .toLocaleString("en", {
              minimumFractionDigits: 3, // Số chữ số thập phân tối thiểu
              maximumFractionDigits: 3, // Số chữ số thập phân tối đa
              useGrouping: true, // Sử dụng dấu chấm làm phân cách hàng nghìn
            })
            .replace(/\B(?=(\d{3})+(?!\d))/g, "."),
        };
        dispatch(addToCart(productWithColor));
        toast.success("Thêm vào giỏ hàng thành công");
        navigate("/home");
      }
    }
  };
  const handleBuyProduct = (product) => {
    if (!Login.user.id) {
      return toast.error("Bạn cần phải đăng nhập !");
    } else {
      if (!selectedColor && !selectedSize && !quantity) {
        toast.error("Vui lòng chọn đủ màu sắc, kích cỡ và số lượng !");
      } else if (!selectedColor) {
        toast.error("Vui lòng chọn màu sắc cho sản phẩm !");
      } else if (!selectedSize) {
        toast.error("Vui lòng chọn kích cỡ sản phẩm !");
      } else if (!quantity) {
        toast.error("Vui lòng chọn số lượng mà bạn muốn mua !");
      } else {
        const productWithColor = {
          ...product,
          color: selectedColor,
          size: selectedSize,
          quantity: quantity,
          pay: (parseFloat(product.price) * parseFloat(quantity)).toFixed(2),
        };
        dispatch(addToCart(productWithColor));
        toast.success("Đặt hàng thành công");
        navigate("/cart");
      }
    }
  };
  return (
    <>
      <Header />
      {list.map((e, index) => {
        return (
          <div className="details-product-container" key={index}>
            <div className="details-product-content">
              <div className="information-image-product">
                <div className="image-information">
                  <img src={e.image} />
                </div>
              </div>
              <div className="information-option-product">
                <div className="product-title-introduce">
                  <p className="introduce">{e.information}</p>
                </div>
                <div className="icons-star">
                  <div className="product-icons-evaluate">
                    <div className="product-result">4.7</div>
                    <div className="icons-icons-icons">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                  <div className="line-product"></div>
                  <div className="user-evaluate">
                    <p>
                      <b>1,3K</b> <span>Đánh Giá</span>
                    </p>
                  </div>
                  <div className="line-product"></div>
                  <div className="products-sold">
                    <p>
                      <b>{e.purchase}</b> <span>Đã Bán</span>
                    </p>
                  </div>
                </div>
                <div className="product-price">
                  <div>{e.price}</div>
                </div>
                <div className="discount-code">
                  <p>Mã Giảm Giá Của Shop</p>
                  <p>Giảm 5K</p>
                  <p>Giảm 10K</p>
                  <p>3% Hoàn Xu</p>
                  <p>Giảm 30K</p>
                </div>
                <div className="transport">
                  <div className="transport-text">
                    <p>Vận Chuyển</p>
                  </div>
                  <div className="transport-image">
                    <img src={banner17} />
                    <p> Miễn phí vận chuyển</p>
                  </div>
                </div>
                <div className="color-product">
                  <div>Màu Sắc</div>
                  <div class="option-color">
                    <p
                      onClick={() => {
                        handleCheckColor("Xanh Biển");
                      }}
                      className={
                        selectedColor === "Xanh Biển" ? "change" : "default"
                      }
                    >
                      Xanh Biển
                    </p>
                    <p
                      onClick={() => {
                        handleCheckColor("Hồng");
                      }}
                      className={
                        selectedColor === "Hồng" ? "change" : "default"
                      }
                    >
                      Hồng
                    </p>
                    <p
                      onClick={() => {
                        handleCheckColor("Cam");
                      }}
                      className={selectedColor === "Cam" ? "change" : "default"}
                    >
                      Cam
                    </p>
                    <p
                      onClick={() => {
                        handleCheckColor("Đỏ");
                      }}
                      className={selectedColor === "Đỏ" ? "change" : "default"}
                    >
                      Đỏ
                    </p>
                    <p
                      onClick={() => {
                        handleCheckColor("Vàng");
                      }}
                      className={
                        selectedColor === "Vàng" ? "change" : "default"
                      }
                    >
                      Vàng
                    </p>
                  </div>
                </div>
                <div className="color-product">
                  <div>Size</div>
                  <div class="option-color">
                    <p
                      onClick={() => {
                        handleCheckSize("M");
                      }}
                      className={selectedSize === "M" ? "change" : "default"}
                    >
                      M
                    </p>
                    <p
                      onClick={() => {
                        handleCheckSize("L");
                      }}
                      className={selectedSize === "L" ? "change" : "default"}
                    >
                      L
                    </p>
                    <p
                      onClick={() => {
                        handleCheckSize("XL");
                      }}
                      className={selectedSize === "XL" ? "change" : "default"}
                    >
                      XL
                    </p>
                    <p
                      onClick={() => {
                        handleCheckSize("XXL");
                      }}
                      className={selectedSize === "XXL" ? "change" : "default"}
                    >
                      XXL
                    </p>
                    <p
                      onClick={() => {
                        handleCheckSize("Ngoại Cỡ");
                      }}
                      className={
                        selectedSize === "Ngoại Cỡ" ? "change" : "default"
                      }
                    >
                      Ngoại Cỡ
                    </p>
                  </div>
                </div>
                <div className="quantity">
                  <div className="option-quantity">Số Lượng</div>
                  <div className="btn-option">
                    <button onClick={handleReduce}>-</button>
                    <input
                      value={quantity}
                      max="99"
                      min="0"
                      onChange={handleQuantity}
                      type="number"
                    />
                    <button onClick={handleIncrease}>+</button>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button
                    onClick={() => {
                      handleMoreCart(e);
                    }}
                  >
                    <AiOutlineShoppingCart />
                    Thêm Vào Giỏ Hàng
                  </button>
                  <button
                    onClick={() => {
                      handleBuyProduct(e);
                    }}
                    className="btn-buy"
                  >
                    Mua Ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Footer />
    </>
  );
}

export default ProductDetails;
