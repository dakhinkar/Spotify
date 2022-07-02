import "./Sidebar.css";
import React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faSearch,
  faHeart,
  faAdd,
  faList,
} from "@fortawesome/free-solid-svg-icons";

import {Link} from 'react-router-dom';

function Sidebar() {
  return (
    <Nav defaultActiveKey="/" className="flex-column side-bar25">

      <Nav.Link 
        as={Link} 
        to="/" 
        style={
          { 
            color: "white", 
            fontSize: "35px" 
          }}>
        <FontAwesomeIcon icon={faSpotify} />
        <span>Spotify</span>
      </Nav.Link>

      <Nav.Link 
        as={Link} 
        to="/" 
        style={
          { 
            color: "white" 
          }}>
        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
      </Nav.Link>

      <Nav.Link 
        as={Link} 
        to="/search" 
        style={
          { 
            color: "white" 
          }}>
        <FontAwesomeIcon icon={faSearch} />
        <span>Search</span>
      </Nav.Link>

      <Nav.Link 
        as={Link} 
        to="/library" 
        style={
          { 
            color: "white" 
          }}>
        <FontAwesomeIcon icon={faList} />
        <span>Your Librabry</span>
      </Nav.Link>
      
      <Nav.Link 
        as={Link} 
        to="/myplaylist" 
        style={
          { 
            color: "white" 
          }}>
        <FontAwesomeIcon icon={faAdd} />
        <span>Create PlayList</span>
      </Nav.Link>

      <Nav.Link 
        as={Link} 
        to="/liked-songs" 
        style={
          {
           color: "white" 
          }}>
        <FontAwesomeIcon icon={faHeart} />
        <span>Liked Songs</span>
      </Nav.Link>
    </Nav>
  );
}
export default Sidebar;
