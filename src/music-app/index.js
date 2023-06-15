import { Routes, Route } from "react-router-dom";
import Home from "./home-screen/index";
import Bookmark from "./bookmark-screen/index";
import LoginScreen from "./login-screen";
import ProfileScreen from "./profile-screen";
import Nav from "./navigation/nav";


const MusicApp = () => {

    return (
        <div>
            <Nav/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/bookmark" element={<Bookmark />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/profile" element={<ProfileScreen />} />
                </Routes>
            </div>
        </div>
    )
};

export default MusicApp;