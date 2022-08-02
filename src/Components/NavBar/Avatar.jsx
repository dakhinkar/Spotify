import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { CgProfile } from "react-icons/cg";
import styles from "./NavBar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { reducerCases } from "../../utils/Constant";
import { useStateProvider } from "../../utils/StateProvider";
function Avatar(props) {
  const [{ userInfo, token }, dispatch] = useStateProvider();
  const logouthandler = () => {
    dispatch({
      type: reducerCases.SET_TOKEN,
      token: null,
    });
    window.location.hash = "";
    dispatch({ type: reducerCases.SET_USERINFO, userInfo: {} });
    console.log("logout");
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        <CgProfile />
        <span>{userInfo.userName}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Item>Setting</Dropdown.Item>
        <Dropdown.Item onClick={logouthandler}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Avatar;
