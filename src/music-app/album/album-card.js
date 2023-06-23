import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function AlbumCard({ album }) {
  return (
    <Link to={`/details/${album.id}`} style={{ textDecoration: "none", color: "black" }}>
      <Card>
        <Card.Img src={album.images[0].url} />
        <Card.Body className="d-none d-lg-block">
          <Card.Title>{album.name}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default AlbumCard;
