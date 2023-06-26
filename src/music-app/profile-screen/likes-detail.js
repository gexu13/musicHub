import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './review.css';
import { Link } from 'react-router-dom';
import { deleteLikedAlbum } from '../services/albums-service';

function LikesDetail({ myLikes, onDelete}) {
//   const token = useSelector((state) => state.apiInfo.token);
//   const [album, setAlbum] = useState(null);

//   const deleteReviewHandler = async () => {
//     console.log(myLikes.albumId);
//     await deleteLikedAlbum(myLikes.albumId);
// }

//   useEffect(() => {
//     fetch(`https://api.spotify.com/v1/albums/${review.albumId}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setAlbum(data);
//       });
//   }, []);

//   if (!album) {
//     return <div>Loading...</div>;
//   }

  return (
    <li className="list-group-item border border-light border-2 p-3 mb-0 mt-0">
      <div className="review-container">
        
        <div className="review-details">
        <Link to={`/details/${myLikes?.albumId}`}>
          <div className="image">
            <img
              width={130}
              className="rounded-3"
              src={myLikes.image}
              alt={myLikes.name}
            />
            
          </div>
          </Link>
          <div className="content">
            <div>
              <Link to={`/details/${myLikes?.albumId}`}>
                <h4 className='d-none d-md-block'>{myLikes?.name}</h4> 
              </Link>  
              {/* <div className="text-content">{review.review}</div> */}
              <div className="review-stat">likes: {myLikes?.likes}</div>
            </div>
          </div>
        </div>
        <AiOutlineCloseCircle className="close-icon"
        onClick={() => onDelete(myLikes.albumId)}/>
      </div> 
    </li>
  );

}

export default LikesDetail;