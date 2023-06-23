import React, { useEffect } from "react";
import Nav from "../navigation/nav";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchToken } from "../reducers/api-info";
import Anonymous from "./anonymous-home";

function Home() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.apiInfo.token);
  const currentUser = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchToken());
  }, [dispatch]);

  return (
    <div className="flex flex-col">
      <Container>
        <h2 className="font-bold text-2xl">Home</h2>
      </Container>
      {/* {!currentUser.currentUser && <Anonymous />} */}
      <Anonymous />
    </div>
  );
}

export default Home;
