import React, { useEffect } from "react";
import Nav from "../navigation/nav";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Anonymous from "./anonymous-home";
import LoginHome from "./login-home";

function Home() {
  const currentUser = useSelector((state) => state.users);

  return (
    <div className="flex flex-col">
      <Container>
        {currentUser.currentUser && <LoginHome />}
        <Anonymous />
      </Container>
    </div>
  );
}

export default Home;
