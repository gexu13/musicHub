import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function AlbumCard({ album }) {
  return (
    <Link to={`/details/${album.id}`}>
      <Card>
        <Card.Img src={album.images[0].url} />
        <Card.Body>
          <Card.Title>{album.name}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default AlbumCard;
