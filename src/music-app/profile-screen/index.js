import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateUserThunk, logoutThunk } from '../services/auth-thunks';
import * as reviewsService from '../services/reviews-service';
import { profileThunk} from '../services/auth-thunks';
import ReviewPiece from './review-detail';

const ProfileScreen = () => {

    const {currentUser} = useSelector(state => state.users);
    const [profile, setProfile] = useState(currentUser);
    const [myReview, setMyReview] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const saveProfile = async () => {
        await dispatch(updateUserThunk(profile));
    };

    const fetchProfile = async () => {
      try {
        const { payload } = await dispatch(profileThunk(profile));
        setProfile(payload);
      } catch (error) {
        console.error(error);
        navigate("/login");
      }
    };

    const fetchMyReview = async () => {
      const result = await reviewsService.findMyReview();
      console.log(result);
      setMyReview(result);
    };

    const deleteReview = async (id) => {
      try {
        await dispatch(reviewsService.deleteReview(id)); 
        const updatedReviews = myReview.filter((review) => review._id !== id);
        setMyReview(updatedReviews);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      fetchProfile();
      fetchMyReview();
    }, []);

    return (
        
        <div>
            <div className="profile-section mt-2">
              <h2 className="font-bold text-2xl">My Profile</h2>
              { profile && 
                  (<div>
                     <img className="rounded-circle" src={`../images/${profile.avatar}`} width={60} />
                      <div>
                          <label>Username</label>
                          <input className='form-control'
                              type="text" value={profile.username}
                              disabled/>
                      </div>
                      <div>
                          <label>User type</label>
                          <input className='form-control'
                              type="text" value={profile.userType}
                              disabled/>
                      </div>
                      <div>
                          <label>First Name</label>
                          <input className='form-control' 
                              type="text" value={profile.firstName}
                              onChange={(e) => {
                                  const newProfile = {...profile, firstName: e.target.value};
                                  setProfile(newProfile);
                          }}/>
                      </div>
                      <div>
                          <label>Last Name</label>
                          <input className='form-control'
                              type="text" value={profile.lastName}
                              onChange={(e) => {
                                  const newProfile = {...profile, lastName: e.target.value};
                                  setProfile(newProfile);
                          }}/>
                      </div>
                      {profile.userType === 'ARTIST' && (
                      <div>
                          <label>Aritist</label>
                          <input className='form-control'
                              type="text" value={profile.stageName}
                              onChange={(e) => {
                                  const newProfile = {...profile, stageName: e.target.value};
                                  setProfile(newProfile);
                          }}/>
                      </div>)}
                      <div>
                          <label>Email</label>
                          <input className='form-control'
                              type="email" value={profile.email}
                              onChange={(e) => {
                                  const newProfile = {...profile, email: e.target.value};
                                  setProfile(newProfile);
                          }}/>
                      </div>
                      <div>
                          <label>Password</label>
                          <input className='form-control'
                              type="password" value={profile.password}
                              onChange={(e) => {
                                  const newProfile = {...profile, password: e.target.value};
                                  setProfile(newProfile);
                          }}/>
                      </div>
                  </div>
              )}
              <button className='btn btn-danger mt-2 me-2'
                      onClick={() => {
                                      dispatch(logoutThunk());
                                      navigate("/login");}
                              }>
                  Logout
              </button>
              <button className='btn btn-primary mt-2'
                      onClick={() => {saveProfile()}}>
                  Save
              </button>
            </div>
            {myReview && 
            <div className="review-section mt-0">
              <h2 className="font-bold text-2xl">My Reviews</h2>
              {myReview.map(review => <ReviewPiece key={review._id} review={review} onDelete={deleteReview}/> )}
            </div>
            }
            



            MyReview<pre>{JSON.stringify(myReview, null, 2)}</pre>
            Profile<pre>{JSON.stringify(profile, null, 2)}</pre>
            currentUser<pre>{JSON.stringify(currentUser, null, 2)}</pre>
        </div>
    )
}

export default ProfileScreen;