import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ReviewItem from "./ReviewItem";
import {findReview} from "../services/reviews-thunks";

const ReviewList = () => {
  const {reviews, loading} = useSelector(state => state.reviews)
  console.log(reviews)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findReview())
  }, [])
 
 return(
  <>
     <ul className="list-group">
      { loading &&
       <li className="list-group-item">
         Loading...
       </li>
     }

     {
       reviews.map(review =>
         <ReviewItem
           key={review._id} review={review}/> )
     }
   </ul>

  </>
 );
};
export default ReviewList;