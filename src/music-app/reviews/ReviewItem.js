import React, { useEffect } from 'react';
import ReviewStats from './ReviewStats';
import {useDispatch} from "react-redux";
import {deleteReview} from "../services/reviews-thunks";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { findUserById } from '../services/users-service';
import { useState } from 'react';
import './review.css';
import { Link } from 'react-router-dom';


const ReviewItem = ({ review }) => {

  const { liked, replies, likes, review: content } = review;
  const [author, setAuthor] = useState();

  

  useEffect(() => {
    const findAuthor = async() => {
      const author = await findUserById(review.author);
      setAuthor(author);
    }
    findAuthor();
  }, []);

  //console.log(content);
const dispatch = useDispatch();
const deleteReviewHandler = (id) => {
  dispatch(deleteReview(id));
}


const displayTime = () => {
  var currentTime = Date.now();
  var selectedTime = new Date(review.postTime).getTime();
  var timeDifference = currentTime - selectedTime;
  var mins = Math.floor(timeDifference / (1000 * 60));
  var hours = Math.floor(timeDifference / (1000 * 60 * 60));
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  if (days > 0) {
      return days + "d";
  } else if (hours > 0) {
      return hours + "h";
  } else if (mins > 0) {
      return mins + "m";
  } else {
      return "now";
  }
};


  return (
    <li className="list-group-item mt-0 mb-0">
      <div className="row">
        <div className="col-auto">
          {/* <Link to={`/profile/${author?._id}`}> */}
          
          <Link to="/profile">
          <img className="rounded-circle" src={`../images/${author?.avatar}`} width={60} />
          </Link>
        </div>
        {/* <div className="col-10 review-content">
          <AiOutlineCloseCircle className="bi bi-x-lg float-end"
            onClick={() => deleteReviewHandler(review._id)}/>
          <div>{content}</div>
        </div> */}
        <div className="col-10">
            <span className="fw-bolder me-1">
            {/* <Link className="text-decoration-none text-dark" to={`/profile/${author?._id}`}> */}


            <Link className="text-decoration-none text-dark" to="/profile">
              {author?.username}
            </Link>
            </span> · {displayTime()}
            <div>
              <AiOutlineCloseCircle className="bi bi-x-lg float-end"
                onClick={() => deleteReviewHandler(review._id)}/>
            <div>{content}</div>
            </div>
        </div>
      </div>

      <div className="row-below">
        <ReviewStats replies={replies} likes={likes} liked={liked} />
      </div>
    </li>

    

    
  );
};

export default ReviewItem;