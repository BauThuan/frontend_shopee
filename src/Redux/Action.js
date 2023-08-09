export const EditUserInformation = (data) => {
  return {
    type: "UpdateInformation",
    payload: data,
  };
};

export const EditUserLogin = (data) => {
  return {
    type: "UpdateLogin",
    payload: data,
  };
};
export const EditUserLogout = (data) => {
  return {
    type: "UpdateLogout",
    payload: data,
  };
};
export const ShowBackGround = (data) => {
  return {
    type: "HomeBackGround",
    payload: data,
  };
};
export const addToCart = (data) => {
  return {
    type: "addToCart",
    payload: data,
  };
};
