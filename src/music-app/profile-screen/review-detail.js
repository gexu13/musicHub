import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux";
import {deleteReview} from "../services/reviews-thunks";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './review.css';

function ReviewPiece({ review }) {
  const token = useSelector((state) => state.apiInfo.token);
  const [album, setAlbum] = useState(null);

  const dispatch = useDispatch();
  const deleteReviewHandler = (id) => {
  dispatch(deleteReview(id));
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
    <li className="list-group-item">
      <div className="review-container">
        <div className="review-details">
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
              <h4>{album.name}</h4>
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
