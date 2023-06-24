import React, { useEffect, useState } from "react";
import Nav from "../navigation/nav";
import { Container, Row } from "react-bootstrap";
import AlbumCard from "../album/album-card";
import { useSelector, useDispatch } from "react-redux";

function Anonymous() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.apiInfo.token);
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    if (token) {
      fetch("https://api.spotify.com/v1/browse/new-releases", {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then(response => response.json())
      .then(data => setNewReleases(data.albums.items))
      .catch((error) => console.error('Error:', error));
    }
  }, [token]);


  return (
    <div className="flex flex-col">
      <Container>
      <h2 className="font-bold text-2xl">Home</h2>
        <Row className="mx-2 row row-cols-4">
          {newReleases.map((album, index) => (
            <AlbumCard key={index} album={album} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Anonymous;
