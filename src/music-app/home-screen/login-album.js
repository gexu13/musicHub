import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function LoginAlbum({ review }) {
  const token = useSelector((state) => state.apiInfo.token);
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    fetch(`https://api.spotify.com/v1/albums/${review.albumId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAlbum(data);
      });
  }, []);

  if (!album) {
    return <div>Loading...</div>;
  }

  return (
        <div className="review-details">
        <Link to={`/album/${review.albumId}`}>
          <Card>
            <Card.Img src={album.images[0]?.url} />
            <Card.Body>
              <Card.Title>              
                <Link to={`/album/${review.albumId}`}>
                <h4>{album.name}</h4> 
                </Link>  
              </Card.Title>
            </Card.Body>
          </Card>
          </Link>
        </div>
  );

}

export default LoginAlbum;
