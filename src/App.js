import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Support from "./Error/Support";
import Profile from "./User/Profile";
import store from "./Redux/Store";
import Cart from "./Cart/Cart";
import { Provider } from "react-redux";
import ProductList from "./User/test";
import ProductDetails from "./ProductInformation/ProductDetails";
import HomePage from "./Home/HomePage";
import Name from "./Name/Name";
import SaveInformation from "./User/SaveInformaton";

function App() {
  return (
    <Provider store={store}>
      <>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/support" element={<Support />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/test" element={<ProductList />} />
            <Route path="/name" element={<Name />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
            <Route path="/saveInformation" element={<SaveInformation />} />
          </Routes>
        </Router>
      </>
    </Provider>
  );
}

export default App;
