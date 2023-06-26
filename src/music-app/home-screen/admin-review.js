import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUserByIdThunk } from '../services/users-thunk'

function AdminReview({ review, onDelete }) {
  const token = useSelector((state) => state.apiInfo.token);
  const dispatch = useDispatch();
  const [album, setAlbum] = useState(null);
  const [username, setUsername] = useState('');

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

    dispatch(fetchUserByIdThunk(review.author))
      .then((res) => {
        if (res.payload && res.payload.username) {
          setUsername(res.payload.username);
        }
      });
  }, [dispatch, review.author, token, review.albumId]);

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
              <Link to={`/details/${review.albumId}`} style={{ textDecoration: "none"}}>
                <h4 className='d-none d-md-block'>{album.name}</h4> 
              </Link>  
              <div className="text-content">{review.review}</div>
              <div className="review-stat">By: {username}</div>
            </div>
          </div>
        </div>
        <button className='btn btn-danger mt-2 me-2'
                      onClick={() => deleteReviewHandler(review._id)}>
                Delete
        </button>
      </div> 
    </li>
  );

}

export default AdminReview;
