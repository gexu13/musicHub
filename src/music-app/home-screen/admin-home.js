import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AdminReview from './admin-review';
import { findAllReview, deleteReview } from '../services/reviews-thunks';
import { findAllUsersThunk, deleteUserThunk } from '../services/users-thunk';
import AdminUser from './admin-user';

const AdminHome = () => {
 
    const reviews = useSelector(state => state.reviews.reviews);
    const users = useSelector(state => state.manageUsers.users);
    console.log(users);
    const currentUser = useSelector(state => state.users.currentUser);

    const dispatch = useDispatch();

    const deleteTheReview = async (id) => {
      try {
        await dispatch(deleteReview(id)); 
      } catch (error) {
        console.error(error);
      }
    };

    const deleteTheUser = async (id) => {
      try {
        await dispatch(deleteUserThunk(id)); 
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAllReview = async () => {
      const result = await dispatch(findAllReview());
    };

    const fetchAllUser= async () => {
      const result = await dispatch(findAllUsersThunk());
    };


    useEffect(() => {
      fetchAllReview();
      fetchAllUser();
    }, [dispatch]);

    return (
        
        <div>
            {users && currentUser &&
              <div className="user-section mt-2">
                <h2 className="font-bold text-2xl">All Users</h2>
                {users.filter(user => user.userType !== "ADMIN")
                  .map(user => <AdminUser key={user._id} user={user} onDelete={deleteTheUser}/> )}
              </div>
            }
            {reviews && 
            <div className="review-section mt-0">
              <h2 className="font-bold text-2xl">All Reviews</h2>
              {reviews.map(review => <AdminReview key={review._id} review={review} onDelete={deleteTheReview}/> )}
            </div>
            }
        </div>
    )
}

export default AdminHome;