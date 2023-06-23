import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { findUserById } from '../services/users-service';
import { useState } from 'react';
import * as reviewsService from '../services/reviews-service';






const OthersProfileScreen = () => {

    const {uid} = useParams();
    const {currentUser} = useSelector(state => state.users);
    const navigate = useNavigate();

    const [author, setAuthor] = useState();
    const [review, setReview] = useState([]);

    // const fetchAuthorReview = async () => {
    //     const result = await reviewsService.findReviewByAuthorId();
    //     console.log(result);
    //     setReview(result);
    //   };

    useEffect(() => {

        if (currentUser && currentUser._id === uid) {
            navigate("/profile");
        }
        else {
            // const findAuthor = async () => {
            //     const response = await findUserById(uid);
            //     setAuthor(response);
            // };
            // findAuthor();
            // fetchAuthorReview();
        }
    }, [currentUser._id, uid]);



    return (
        <div>
            <h4>Others Profile Screen</h4>



            {/* {JSON.stringify(author)} */}
            {/* {JSON.stringify(review)} */}
        </div>
    )
}

export default OthersProfileScreen;
