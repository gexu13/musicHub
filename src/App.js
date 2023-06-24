import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import MusicApp from "./music-app";
import { configureStore } from '@reduxjs/toolkit';
import apiInfo  from "./music-app/reducers/api-info";
import authReducer from "./music-app/reducers/auth-reducer";
import reviewReducer from "./music-app/reducers/review-reducer";
import { Provider } from "react-redux";


const store = configureStore({reducer: {apiInfo: apiInfo,
  users: authReducer,
  reviews: reviewReducer}});


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="container">
          <Routes>
            <Route path="/*" element={<MusicApp />} />
          </Routes>
        </div>
        </Provider>
    </BrowserRouter>
  );
}

export default App;