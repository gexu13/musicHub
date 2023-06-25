import React, { useState } from 'react';
import { BsChatSquare, BsHeart, BsHeartFill, BsShare } from 'react-icons/bs';
import './review.css'

const ReviewStats = ({ review, likes, liked }) => {
  const [isLiked, setIsLiked] = useState(liked);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(review?.likes - 1);
    } else {
      setLikesCount(review?.likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="review-stats">
      <div className="review-stats">
        {isLiked ? (
          <BsHeartFill className="heart-icon liked mr-2" onClick={handleLike} />
        ) : (
          <BsHeart className="heart-icon mr-2" onClick={handleLike} />
        )}
        {review?.likes}
        {JSON.stringify(review?.likes)}
      </div>
    </div>
  );
};

export default ReviewStats;