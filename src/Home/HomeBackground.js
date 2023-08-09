import "./HomeBackground.scss";
import { useState, useEffect } from "react";
import banner22 from "../assets/image/banner22.png";
import { BiX } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ShowBackGround } from "../Redux/Action";
import { toast } from "react-toastify";
function HomeBackground() {
  const showGround = useSelector((state) => state.Background.isBackGround);
  const dispatch = useDispatch();
  const [shows, setShows] = useState(false);
  const [information, setInformation] = useState(false);
  useEffect(() => {
    setShows(true);
  }, []);
  const handleShow = () => {
    setShows(false);
    dispatch(
      ShowBackGround({
        type: "HomeBackGround",
        isBackGround: false,
      })
    );
  };
  return (
    <>
      {shows && showGround && (
        <div className="background-container">
          <BiX className="background-exit" onClick={handleShow} />
          <div className="background-content">
            <img src={banner22} />
          </div>
        </div>
      )}
    </>
  );
}
export default HomeBackground;
