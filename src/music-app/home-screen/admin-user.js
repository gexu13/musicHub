import React from 'react';
import { Link } from 'react-router-dom';

function AdminUser({ user, onDelete }) {

  const deleteReviewHandler = (id) => {
    onDelete(id);
  }

  return (
    <li className="list-group-item border border-light border-2 p-3 mb-0 mt-0">
      <div className="user-container d-flex">
        <div>
          <Link to={`/profile/${user._id}`}>
            <div className="image">
              <img className="rounded-circle" 
              src={`../images/${user?.avatar}`} 
              alt={user.username} 
              width={60} 
              />
            </div>
          </Link>
          <div className="user-type mt-2 ml-2">{user.userType}</div>
        </div>
        <div className="user-info ml-4">
          <div className="user-name">{user.username}</div>
          <div className="user-email">{user.email}</div>
        </div>
        <button 
          className='delete-button btn btn-danger mt-2 me-2 ms-auto align-self-center' 
          onClick={() => deleteReviewHandler(user._id)}
        >
            Delete
        </button>
      </div> 
    </li>
  );

}

export default AdminUser;
