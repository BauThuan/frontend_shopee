import image1 from "../assets/image/banner1.png";
import image2 from "../assets/image/banner2.jpg";
import image3 from "../assets/image/banner3.png";
import image4 from "../assets/image/banner4.jpg";
import image5 from "../assets/image/banner5.png";
import image6 from "../assets/image/banner6.jpg";
import image7 from "../assets/image/banner7.png";
import image8 from "../assets/image/banner8.jpg";
import image9 from "../assets/image/banner9.png";
import image10 from "../assets/image/banner10.png";
import image11 from "../assets/image/banner11.png";
import image12 from "../assets/image/banner12.png";
import image13 from "../assets/image/banner13.png";
import image14 from "../assets/image/banner14.png";
import image15 from "../assets/image/banner15.png";
import image16 from "../assets/image/banner16.png";
import image17 from "../assets/image/banner17.png";
import Slider from "react-slick";
import "./Slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderText } from "./Data";

function SliderImage() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="slider-container">
      <div className="slider-content">
        <Slider className="slider-up" {...settings}>
          <div>
            <img style={{ borderRadius: "5px" }} src={image1} alt="" />
            <img style={{ borderRadius: "5px" }} src={image9} alt="" />
          </div>
          <div>
            <img style={{ borderRadius: "5px" }} src={image2} alt="" />
            <img style={{ borderRadius: "5px" }} src={image9} alt="" />
          </div>
          <div>
            <img style={{ borderRadius: "5px" }} src={image3} alt="" />
            <img style={{ borderRadius: "5px" }} src={image9} alt="" />
          </div>
          <div>
            <img style={{ borderRadius: "5px" }} src={image4} alt="" />
            <img style={{ borderRadius: "5px" }} src={image9} alt="" />
          </div>
          <div>
            <img style={{ borderRadius: "5px" }} src={image5} alt="" />
            <img style={{ borderRadius: "5px" }} src={image9} alt="" />
          </div>
          <div>
            <img style={{ borderRadius: "5px" }} src={image6} alt="" />
            <img style={{ borderRadius: "5px" }} src={image9} alt="" />
          </div>
        </Slider>
        <div className="slider-down">
          <div>
            <img src={image7} />
          </div>
          <div>
            <img src={image8} />
          </div>
        </div>
      </div>
      <div className="slider-image">
        <table cellspacing="10">
          <tr className="table-information-up">
            <td>
              <img src={image17} />
            </td>
            <td>
              <img src={image16} />
            </td>
            <td>
              <img src={image15} />
            </td>
            <td>
              <img src={image14} />
            </td>
            <td>
              <img src={image13} />
            </td>
            <td>
              <img src={image12} />
            </td>
            <td>
              <img src={image11} />
            </td>
            <td>
              <img src={image10} />
            </td>
          </tr>
          <tr className="table-information-down">
            {SliderText.map((text, index) => {
              return <td key={index}>{text.text}</td>;
            })}
          </tr>
        </table>
      </div>
    </div>
  );
}
export default SliderImage;
