import { Navbar, Form, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faSearch,
    faHeart,
    faAdd,
    faList,
  } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  const styles = {
    container1: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    //   width: "100%",
      marginLeft: "18vw",
      color: "white",
      padding: "10px",
    },
    icon: {position: "relative", left: "30px" , color: "black", cursor: "pointer"},
    input: {
      width: "260px",
      /* padding: 0; */
      height: "45px",
      borderRadius: "29px",
      textAlign: "center",
      outline : "none",
    },
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  };
  return (
    <Navbar bg="dark" fixed="top" style={styles.container1}>
      <div>
        <FontAwesomeIcon icon={faSearch}  style={styles.icon}/>
        <input type="text" placeholder="Songs, Artists or podcasts" style={styles.input} />
      </div>

      <div style={styles.container}>
        <Nav.Link style={{ color: "white" }} >Sign Up</Nav.Link>
        <Nav.Link as={Link} to="/login" style={{ color: "white" }}>Login</Nav.Link>
      </div>
    </Navbar>
  );
};
export default NavBar;
