import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { BsHeart, BsBookmark } from "react-icons/bs";
import "./album.css";

function AlbumDetails() {
  const { id } = useParams();
  const token = useSelector((state) => state.apiInfo.token);
  const [album, setAlbum] = useState(null);
  useEffect(() => {
    fetch(`https://api.spotify.com/v1/albums/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAlbum(data);
      });
  }, [id, token]);

  console.log(album);
  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <Container>
        <Row>
          <Col md={6}>
            <h1>{album.name}</h1>
            <img src={album.images[0]?.url} alt={album.name} />
          </Col>
          <Col className="right-col" md={6}>
            <Row>
              <h4>Album Type: {album.album_type}</h4>
              <h4>Release Date: {album.release_date}</h4>
              <h4>Total Tracks: {album.total_tracks}</h4>
              <a href={album.external_urls.spotify} target="_blank" rel="noopener noreferrer">Spotify Link</a>
            </Row>
            <div className="album-icons">
              <BsHeart className="heart-icon"/>
              <BsBookmark className="bookmark-icon"/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AlbumDetails;
