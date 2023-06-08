import React from "react";
import { Card } from "react-bootstrap";

function AlbumCard({ album }) {
  return (
    <Card>
      <Card.Img src={album.images[0].url} />
      <Card.Body>
        <Card.Title>{album.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default AlbumCard;
