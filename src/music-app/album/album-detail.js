import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { BsHeart, BsBookmark } from "react-icons/bs";
import ReviewList from "../reviews/ReviewList";
import ReviewResult from "../user-reviews/reviews-result";
import "./album.css";

function AlbumDetails() {
  const { id } = useParams();
  const token = useSelector((state) => state.apiInfo.token);
  const [album, setAlbum] = useState(null);
  const [tracks, setTracks] = useState([]);
  console.log(album);
  useEffect(() => {
    fetch(`https://api.spotify.com/v1/albums/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAlbum(data);
        setTracks(data.tracks.items);
      });
  }, [id, token]);

  //console.log(album);
  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <Container>
        <Row>
          <h1>{album.name}</h1>
        </Row>
        <Row>
          <Col md={6}>
            <img src={album.images[0]?.url} alt={album.name} />
          </Col>
          <Col className="right-col" md={6}>
            <div className="album-info">
              <h4>Artist: {album.artists[0].name}</h4>
              <h4>Release Date: {album.release_date}</h4>
              <a href={album.external_urls.spotify} target="_blank" rel="noopener noreferrer"   style={{ textDecoration: 'none'}}><h4>Spotify Album Link</h4></a>
              <h4>Total Tracks: {album.total_tracks}</h4>
            </div>
            <div>
              <ul className="list-group mt-4">
                {tracks && tracks.map((track) => (
                  <li className="list-group-item m-0" key={track.id}>
                  <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none'}}><h5>{track.name}</h5></a>
                  {/*                  
                  <audio className="float-end" controls src={track.external_urls.spotify}>
                  </audio> */}
                  </li>
                ))}
              </ul>
            </div>
            {/*
              <div className="album-icons">
              <BsHeart className="heart-icon" />
              <BsBookmark className="bookmark-icon" />
            </div>*/}
          </Col>
        </Row>
        <Row>
            <div className="review-section">
              <h2>Reviews</h2>
              <ReviewResult />
              <ReviewList />
            </div>
        </Row>
      </Container>
    </div>
  );
}

export default AlbumDetails;
