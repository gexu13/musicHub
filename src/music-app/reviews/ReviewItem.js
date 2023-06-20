import React from 'react';
import ReviewStats from './ReviewStats';
import {useDispatch} from "react-redux";
import {deleteReview} from "../services/reviews-thunks";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './review.css';


const ReviewItem = ({ review }) => {
  const { liked, replies, likes, review: content } = review;

const dispatch = useDispatch();
const deleteReviewHandler = (id) => {
  dispatch(deleteReview(id));
}

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-10 review-content">
          <AiOutlineCloseCircle className="bi bi-x-lg float-end"
            onClick={() => deleteReviewHandler(review._id)}/>
          <div className="fw-bolder">{review.topic}</div>
          <div>{content}</div>
        </div>
      </div>
      <div className="row-below">
        <ReviewStats replies={replies} likes={likes} liked={liked} />
      </div>
    </li>
  );
};

export default ReviewItem;