import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);
}

export default HomePage;
