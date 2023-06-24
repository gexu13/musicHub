import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home-screen/index";
import Bookmark from "./bookmark-screen/index";
import LoginScreen from "./login-screen";
import ProfileScreen from "./profile-screen";
import RegisterScreen from "./register-screen";
import SearchScreen from "./search-screen";
import Nav from "./navigation/nav";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import apiInfo  from "./reducers/api-info";
import AlbumDetails from "./album/album-detail"; 
import authReducer from "./reducers/auth-reducer";
import reviewReducer from "./reducers/review-reducer";
import OthersProfileScreen from "./profile-screen/others-profile";
import ArtistHome from "./home-screen/artist-home";
import { fetchTokenThunk } from "./reducers/api-info";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


const client_id = "7ef9e2995db44a4ea55eb166ca757f66";
const client_secret = "86c419e8c2cf4763892ff8de340ef70d";

const MusicApp = () => {

  const dispatch = useDispatch();

  const fetchToken = async () => {
    await dispatch(fetchTokenThunk());
  };

  useEffect(() => {
    fetchToken();
  }, []);

    return (
        <div>
          <Nav/>
          <div className="container">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/search" element={<SearchScreen />} />
                  <Route path= "/search/:keyword" element={<SearchScreen />} />
                  <Route path="/bookmark" element={<Bookmark />} />
                  <Route path="/login" element={<LoginScreen />} />
                  <Route path="/register" element={<RegisterScreen />} />
                  <Route path="/profile" element={<ProfileScreen />} />
                  <Route path="/details/:id" element={<AlbumDetails />} />
                  <Route path="/profile/:uid" element={<OthersProfileScreen/>} />
                  <Route path="/artist-home" element={<ArtistHome/>} />
              </Routes>
          </div>
        </div>
    )
};

export default MusicApp;