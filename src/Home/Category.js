import "./Category.scss";
import { Category, Sale } from "./Data";
import Countdown from "./Countdown";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function CategoryList() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleCategory = (idCategory) => {
    navigate(`/productdetails/${idCategory}`);
    toast.success("Lấy thông tin thành công !");
  };
  const handleSale = (idSale) => {
    navigate(`/productdetails/${idSale}`);
    toast.success("Lấy thông tin thành công !");
  };
  return (
    <>
      <div className="body-page-container">
        <div className="body-page-category">
          <div className="body-page-title">Danh Mục</div>
          <div className="body-page-list">
            {Category.map((e, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleCategory(e.id);
                  }}
                  className="body-page-information"
                >
                  <img className="hover-image" src={e.image} />
                  <p>{e.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="body-page-container">
        <div className="body-page-category">
          <Countdown />
          <div className="body-page-list">
            {Sale.map((e, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleSale(e.id);
                  }}
                  className="body-page-information"
                >
                  <img className="hover-image" src={e.image} />
                  <p>{e.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="body-page-container">
        <div className="body-page-category">
          <img src="https://cf.shopee.vn/file/sg-50009109-f0e917e67e692372bf712143b15555aa" />
        </div>
      </div>
    </>
  );
}
export default CategoryList;
