import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteBookmarkThunk, findBookmarkThunk } from '../services/bookmark-thunk';
import BookmarkPiece from './bookmark-detail';

function Bookmark() {
  const {currentUser} = useSelector(state => state.users);
  console.log(currentUser);
  const id = currentUser.id;
  const bookmarks = useSelector(state => state.bookmarks.bookmarks);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const fetchMyBookmark= async () => {
    console.log("fetchMyBookmark");
    const result = await dispatch(findBookmarkThunk());
    console.log(result);
  };

  const deleteMyBookmark = async (id) => {
    try {
      await dispatch(deleteBookmarkThunk(id)); 
      fetchMyBookmark();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMyBookmark();
  }, []);


  return (
        
    <div>
        {bookmarks && 
        <div className="review-section mt-0">
          <h2 className="font-bold text-2xl">My Bookmarks</h2>
          {bookmarks.map(bookmark=> <BookmarkPiece key={bookmark._id} bookmark={bookmark} onDelete={deleteMyBookmark}/> )}
        </div>
        }
    </div>
)
};

 
 export default Bookmark;