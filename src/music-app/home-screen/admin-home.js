import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AdminReview from './admin-review';
import { findAllReview, deleteReview } from '../services/reviews-thunks';

const AdminHome = () => {
 
    const reviews = useSelector(state => state.reviews.reviews);
    console.log(reviews);

    const dispatch = useDispatch();

    const deleteTheReview = async (id) => {
      try {
        await dispatch(deleteReview(id)); 
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAllReview = async () => {
      const result = await dispatch(findAllReview());
    };

    useEffect(() => {
      fetchAllReview();
    }, [dispatch]);

    return (
        
        <div>
            {reviews && 
            <div className="review-section mt-0">
              <h2 className="font-bold text-2xl">All Reviews</h2>
              {reviews.map(review => <AdminReview key={review._id} review={review} onDelete={deleteTheReview}/> )}
            </div>
            }
            



            MyReview<pre>{JSON.stringify(reviews, null, 2)}</pre>
        </div>
    )
}

export default AdminHome;