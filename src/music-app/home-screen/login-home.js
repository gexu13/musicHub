import React, { useEffect, useState } from "react";
import Nav from "../navigation/nav";
import { Container, Row } from "react-bootstrap";
import AlbumCard from "../album/album-card";
import { useSelector, useDispatch } from "react-redux";
import { fetchToken } from "../reducers/api-info";
import * as reviewsService from '../services/reviews-service';
import { useNavigate } from 'react-router-dom';
import LoginAlbum from "./login-album";

function LoginHome() {
  const [myReview, setMyReview] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchMyReview = async () => {
    const result = await reviewsService.findMyReview();
    setMyReview(result);
  };

  useEffect(() => {
    fetchMyReview();
  }, []);

  return (
    <div className="flex flex-col">
      <Container>
        <h2 className="font-bold text-2xl">Recent Reviewed</h2>
        <Row className="mx-2 row row-cols-4">
          {myReview.map(review => (
            <LoginAlbum key={review._id} review={review} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default LoginHome;