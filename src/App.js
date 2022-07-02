import "./App.css";
import React, { useEffect, useState }from "react";
import NavBar from "./UI/NavBar/NavBar";
import Sidebar from "./UI/SideBar/Sidebar";
import Footer from "./UI/Footer/Footer";
import PlayListContainer from "./UI/SongPlayList/PlayListContainer";
import { BrowserRouter as Router, Routes, Route, Path } from "react-router-dom";
import Home from "./Components/Home";
import Search from  "./Components/Search";
import Login from "./Components/Login";
import Library from  "./Components/Library";
// import NotFound from "./Components/NotFound";
import LikedSong from  "./Components/LikedSongs";
import { useStateProvider } from "./context/StateProvider";
import { reduerCases } from "./context/Constant";
function App() {
  const [{token}, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
   if(hash){
    const token = hash.substring(1).split("&")[0].split("=")[1];
    console.log(token);
    dispatch({action: reduerCases.SET_TOKEN, token})
   }
  },[token, dispatch]);
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
          <Route path="/myplaylist" element={<PlayListContainer />} />
          <Route path="/liked-songs" element={<LikedSong />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <NavBar />
        <PlayListContainer />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
