import React from "react";
import { useSelector } from "react-redux";
function Avatar() {
  const myAvatar = useSelector((state) => state.profileUser);
  return (
    <>
      {myAvatar && myAvatar.imageAvatar ? (
        <img src={myAvatar.imageAvatar} />
      ) : (
        <img src="https://www.mcards.vn/images/avatar_KHCN.png" />
      )}
    </>
  );
}
export default Avatar;
