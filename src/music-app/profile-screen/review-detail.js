import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './review.css';
import { Link } from 'react-router-dom';

function ReviewPiece({ review, onDelete }) {
  const token = useSelector((state) => state.apiInfo.token);
  const [album, setAlbum] = useState(null);

  const deleteReviewHandler = (id) => {
  onDelete(id);
}

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
    <li className="list-group-item border border-light border-2 p-3 mb-0 mt-0">
      <div className="review-container">
        
        <div className="review-details">
        <Link to={`/details/${review.albumId}`}>
          <div className="image">
            <img
              width={130}
              className="rounded-3"
              src={album.images[0]?.url}
              alt={album.name}
            />
            
          </div>
          </Link>
          <div className="content">
            <div>
              <Link to={`/details/${review.albumId}`}>
                <h4 className="d-none d-md-block">{album.name}</h4> 
              </Link>  
              <div className="text-content">{review.review}</div>
              <div className="review-stat">likes: {review.likes}</div>
            </div>
          </div>
        </div>
        <AiOutlineCloseCircle className="close-icon"
        onClick={() => deleteReviewHandler(review._id)}/>
      </div> 
    </li>
  );

}

export default ReviewPiece;
