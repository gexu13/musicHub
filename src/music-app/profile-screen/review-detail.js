import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './review.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateReviewThunk } from '../services/reviews-thunks';
import {BiEditAlt} from 'react-icons/bi';
import { AiOutlineCheck, AiOutlineClose}from 'react-icons/ai';

function ReviewPiece({ review, onDelete }) {
  const token = useSelector((state) => state.apiInfo.token);
  const [album, setAlbum] = useState(null);
  const [newReview, setNewReview] = useState(review.review);
  const [currentReview, setCurrentReview] = useState(review.review);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const deleteReviewHandler = (id) => {
  onDelete(id);
}

  const editReviewHandler = async () => {
    await dispatch(updateReviewThunk({...review, review: newReview}));
    setNewReview(newReview);
    setCurrentReview(newReview);
  }

  const handleClick = () => {
    editReviewHandler();
    setIsEditing(false);
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
              <div className="text-content">{currentReview}</div>
              <div className="review-stat">likes: {review.likes}</div>
            </div>
          </div>
        </div>
        <div>
          <button className='d-block'>
            <AiOutlineCloseCircle className="close-icon"
            onClick={() => deleteReviewHandler(review._id)}/>
          </button>
          <button className='mt-2' onClick={() => setIsEditing(true)}><BiEditAlt/></button>
        </div>
      </div> 
      <div>
          {isEditing && (
            <div className='mb-4'>
              <textarea className='form-control mt-1'
                type="text"
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
              />
              <button className="btn btn-danger mt-1 float-end " onClick={() => setIsEditing(false)}><AiOutlineClose/></button>
              <button className="btn btn-primary me-1 mt-1 float-end" onClick={handleClick}><AiOutlineCheck/></button>
            </div> )}
        </div>
    </li>
  );

}

export default ReviewPiece;
