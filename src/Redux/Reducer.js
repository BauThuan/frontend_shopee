import { startTransition } from "react";

const initState = {
  profileUser: [],
  Login: {
    user: {},
    isLoggedIn: false,
  },
  Product: [],
  Background: {
    isBackGround: true,
  },
};
const rootReducer = (state = initState, action) => {
  // {type:"todoList", payload: thông tin chung cần thêm vào trong kho chung}
  switch (action.type) {
    case "UpdateInformation":
      return {
        ...state,
        profileUser: {
          ...state.profileUser,
          user: action.payload.userName,
          email: action.payload.email,
          phoneNumber: action.payload.phoneNumber,
          address: action.payload.address,
          gender: action.payload.gender,
          birthday: action.payload.birthday,
          imageAvatar: action.payload.imageAvatar,
        },
      };
    case "UpdateLogin":
      return {
        ...state,
        Login: {
          ...state.Login,
          user: action.payload,
          isLoggedIn: true,
        },
      };
    case "UpdateLogout":
      return {
        ...state,
        Login: {
          ...state.Login,
          user: action.payload,
          isLoggedIn: false,
        },
      };
    case "addToCart":
      return {
        ...state,
        // chuyển object thành array
        Product: state.Product.concat({
          ...state.Product,
          ...action.payload,
          // image: action.payload.image,
          // information: action.payload.information,
          // percent: action.payload.percent,
          // status: action.payload.status,
          // price: action.payload.price,
          // purchases: action.payload.purchases,
          // color: action.payload.color,
          // size: action.payload.size,
          // quantity: action.payload.quantity,
          // pay: action.payload.pay,
        }),
      };
    case "HomeBackGround":
      return {
        ...state,
        Background: {
          ...state,
          isBackGround: false,
        },
      };
    default:
      return state;
  }
};
export default rootReducer;
