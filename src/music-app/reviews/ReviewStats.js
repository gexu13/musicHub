import React, { useState } from 'react';
import { BsChatSquare, BsHeart, BsHeartFill, BsShare } from 'react-icons/bs';
import './review.css'
import { AiFillLike } from 'react-icons/ai';

const ReviewStats = ({myReview}) => {
  const [likesCount, setLikesCount] = useState(myReview?.likes);

  const handleLike = () => {

    setLikesCount(myReview?.likes + 1);

  };

  return (
    <div className="review-stats">
      <div className="review-stats">
        <button className="">
          <AiFillLike className='text-danger d-inline me-1'/> {myReview?.likes}
        </button>
        {/* {isLiked ? (
          <BsHeartFill className="heart-icon liked mr-2" onClick={handleLike} />
        ) : (
          <BsHeart className="heart-icon mr-2" onClick={handleLike} />
        )}
        {review?.likes}
        {JSON.stringify(review?.likes)} */}
        {myReview}
      </div>
    </div>
  );
};

export default ReviewStats;