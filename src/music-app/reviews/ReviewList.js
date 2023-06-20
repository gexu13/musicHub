import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ReviewItem from "./ReviewItem";
import {findReview} from "../services/reviews-thunks";
import { useParams } from "react-router";

const ReviewList = () => {
  const {reviews, loading} = useSelector(state => state.reviews)
  //console.log(reviews)
  const dispatch = useDispatch();
  const { id: albumId } = useParams();
  useEffect(() => {
    dispatch(findReview(albumId))
  }, [albumId, dispatch])
 
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