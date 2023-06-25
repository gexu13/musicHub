import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



function Nav() {

  const {currentUser} = useSelector(state => state.users);

 return (
  <div className="row sticky-top bg-white">
    <div className="col-8">
      <nav className="nav nav-tabs ">
        <Link className="nav-link" to="/home">Home</Link>
        {(currentUser && currentUser.userType === "ARTIST") 
          &&<Link className="nav-link" to="/artist-home">Artist's home</Link>}
        {(currentUser && currentUser.userType === "ADMIN") 
          &&<Link className="nav-link" to="/admin-home">User Data</Link>}
        <Link className="nav-link" to="/search">Search</Link>
        {/* <Link className="nav-link" to="/bookmark">Bookmark</Link> */}
        <Link className="nav-link" to="/login">Login</Link>
        <Link className="nav-link" to="/register">Register</Link>
        <Link className="nav-link" to="/profile">Profile</Link>
      </nav>
    </div>

    {currentUser &&  
    <div className="col-4 mt-1">
      <div className="float-end">
        <Link className="text-decoration-none text-dark" to="/profile">
          <span className="d-inline fs-6">Hi {currentUser.username} </span>
          <img className="d-inline rounded-circle" src={`../../images/${currentUser.avatar}`} width={40} />
        </Link>
        
      </div>
    </div>
    }

    {/* {console.log(currentUser.avatar)} */}
   
   
   
   {/* <span className="text-white">Welcome {currentUser.username}</span> */}
   

   {/* {JSON.stringify(currentUser.username)} */}
  </div>
   
 );
}
export default Nav;