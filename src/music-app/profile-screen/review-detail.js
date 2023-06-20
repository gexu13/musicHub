import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './review.css';

function ReviewPiece({ review }) {
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
    <li className="list-group-item">
      <div className="review-container">
        <div className="image">
          <img
            width={130}
            className="rounded-3"
            src={album.images[0]?.url}
            alt={album.name}
          />
        </div>
        <div className="content">
          <div>
          <div>
            <h4>{album.name}</h4>
            <div className="text-content">{review.review}</div>
          </div>
          <div className="review-stat">
            likes: {review.likes}
          </div>
          </div>
        </div>
      </div> 
    </li>
  );
}

export default ReviewPiece;
