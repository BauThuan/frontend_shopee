import React from "react";
import { useSelector } from "react-redux";
function Name() {
  const myName = useSelector((state) => state.profileUser);
  return <>{myName.user ? <p>{myName.user}</p> : <p>User</p>}</>;
}
export default Name;
