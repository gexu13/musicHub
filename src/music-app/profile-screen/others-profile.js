import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { findUserById } from '../services/users-service';
import { useState } from 'react';
import * as reviewsService from '../services/reviews-service';
import OthersReviewPiece from './others-reviewDetail';
import { findLikedAlbumsByUserId } from '../services/albums-service';
import OthersLikesDetail from './others-likes-detail';


const OthersProfileScreen = () => {

    const {uid} = useParams();
    const {currentUser} = useSelector(state => state.users);
    const navigate = useNavigate();

    const [author, setAuthor] = useState();
    const [review, setReview] = useState([]);
    const [userLikes, setUserLikes] = useState([]);

    const fetchAuthorReview = async () => {
        const result = await reviewsService.findReviewByAuthorId(uid);
        setReview(result);
    };

    const fetchUsersLikedAlbums = async () => {
        console.log("123123123123123");
        const result = await findLikedAlbumsByUserId(uid);
        setUserLikes(result);
    };


    useEffect(() => {

        if (currentUser && currentUser._id === uid) {
            navigate("/profile");
        }
        else {
            const findAuthor = async () => {
                const response = await findUserById(uid);
                setAuthor(response);
            };
            findAuthor();
            fetchAuthorReview();
            fetchUsersLikedAlbums();
        }
    }, []);



    return (
        <div>
            <h2 className="font-bold text-2xl">{author?.username}'s Profile</h2>
            <div>
                <img className="rounded-circle" src={`../images/${author?.avatar}`} width={60} />
                    <div>
                        <label>Username</label>
                        <input className='form-control'
                            type="text" value={author?.username}
                            disabled/>
                    </div>
                    <div>
                        <label>User type</label>
                        <input className='form-control'
                              type="text" value={author?.userType}
                              disabled/>
                    </div>
                      {/* <div>
                          <label>First Name</label>
                          <input className='form-control' 
                              type="text" value={author?.firstName}
                              disabled/>
                      </div>
                      <div>
                          <label>Last Name</label>
                          <input className='form-control'
                              type="text" value={author?.lastName}
                              disabled/>
                      </div>
                      <div>
                          <label>Email</label>
                          <input className='form-control'
                              disabled/>
                      </div>
                      <div>
                          <label>Password</label>
                          <input className='form-control'
                              type="password" value={author?.password}
                              disabled/>
                      </div> */}
                </div>
                <div className="review-section mt-0">
                    <h2 className="font-bold text-2xl">{author?.username}'s Reviews</h2>
                        {review.map((review, index) => <OthersReviewPiece key = {index} review={review} /> )}
                </div>

                <div className="review-section mt-0">
                    <h2 className="font-bold text-2xl">{author?.username}'s Likes</h2>
                        {userLikes.map((like, index) => <OthersLikesDetail key = {index} userLikes={like} /> )}
                </div>
            
        </div>
    )
}

export default OthersProfileScreen;
