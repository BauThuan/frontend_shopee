import "./SuggestionList.scss";
import { ListOfProducts } from "./Data";
import banner21 from "../assets/image/banner21.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SuggestionList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [render, setRender] = useState(false);
  const [ListBook, setListBook] = useState([]);
  // const Login = useSelector((state) => state.Login);
  console.log(ListBook);
  const Book = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/get-all-book-by-category?categoryId=All"
    );
    if (response.data.errCode === 0) {
      const book = response.data.data;
      setListBook(book);
      console.log("book: ", book);
    } else {
      // toast.error(response.data.messageVI);
    }
  };

  useEffect(() => {
    Book();
  }, []);
  const handleOnClick = (index) => {
    navigate(`/productdetails/${index}`);
    toast.success("Lấy thông tin thành công !");
  };
  return (
    <>
      <div className="suggestion-container">
        <div className="suggestion-content">
          <div className="suggestion-title">
            <h2>GỢI Ý HÔM NAY</h2>
          </div>
          <div className="product-all">
            {ListOfProducts.map((e, index) => {
              return (
                <div
                  className="suggestion-products"
                  onClick={() => {
                    handleOnClick(e.id);
                  }}
                  key={index}
                >
                  <img className="product-image" src={e.image} />
                  <img src={banner21} className="image-child" />
                  <div className="product-information">{e.information}</div>
                  <div className="clip-path"></div>
                  <div className="clip-line">
                    <p>{e.percent}</p>
                    <p>{e.status}</p>
                  </div>
                  <div className="product-price">
                    <span>{e.price}</span>
                    <span>{e.purchases}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default SuggestionList;
