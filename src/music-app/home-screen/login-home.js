import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import * as reviewsService from '../services/reviews-service';
import LoginAlbum from "./login-album";

function LoginHome() {
  const [myReview, setMyReview] = useState([]);
  const [uniqueAlbums, setUniqueAlbums] = useState([]);

  const fetchMyReview = async () => {
    const result = await reviewsService.findMyReview();
    const uniqueAlbumIds = [...new Set(result.map(review => review.albumId))];
    setUniqueAlbums(uniqueAlbumIds);
    setMyReview(result);
  };
  

  useEffect(() => {
    fetchMyReview();
  }, []);

  return (
    <div className="flex flex-col mt-2 mb-6">
      <Container>
        <h2 className="font-bold text-2xl">Recent Reviewed</h2>
        <Row className="mx-2 row row-cols-4">
          {uniqueAlbums.map(albumId => {
          const review = myReview.find(review => review.albumId === albumId);
          return <LoginAlbum key={review._id} review={review} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

export default LoginHome;
