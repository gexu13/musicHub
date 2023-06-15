import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

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

  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{album.name}</h1>
      <img src={album.images[0]?.url} alt={album.name} />
      <p>{album.description}</p>
    </div>
  );
}

export default AlbumDetails;
