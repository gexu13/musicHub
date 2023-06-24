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


const store = configureStore({reducer: {apiInfo: apiInfo,
                                        users: authReducer,
                                        reviews: reviewReducer}});

const MusicApp = () => {

    return (
      <Provider store={store}>
        <div>
            <Nav/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/search" element={<SearchScreen />} />
                    {/* <Route path= "/search/:keyword" element={<SearchScreen />} /> */}
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
      </Provider>
    )
};

export default MusicApp;