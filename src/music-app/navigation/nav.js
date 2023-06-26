import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineLogin, AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import { BiAlbum, BiSearchAlt } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import  { BsBookmarks, BsSearch} from "react-icons/bs";
import { MdAppRegistration } from "react-icons/md";
import { FiUser} from "react-icons/fi";



function Nav() {

  const {currentUser} = useSelector(state => state.users);

 return (
  <div className="row sticky-top bg-white">
    <div className="col-8">
      <nav className="nav nav-tabs ">
        <Link className="nav-link" to="/home">
          <span className="d-none d-md-inline">Home</span>
          <span className="d-xs-inline d-md-none"><AiOutlineHome/></span>
        </Link>
        {(currentUser && currentUser.userType === "ARTIST") 
          &&<Link className="nav-link" to="/artist-home">
              <span className="d-none d-md-inline">Your Albums</span>
              <span className="d-xs-inline d-md-none"><BiAlbum/></span>
            </Link>}
        {(currentUser && currentUser.userType === "ADMIN") 
          &&<Link className="nav-link" to="/admin-home">
              <span className="d-none d-md-inline">User Data</span>
              <span className="d-xs-inline d-md-none"><HiOutlineUsers/></span>
            </Link>}
        {(currentUser && 
          <Link className="nav-link" to="/bookmark">
            <span className="d-none d-md-inline">Bookmark</span>
            <span className="d-xs-inline d-md-none"><BsBookmarks/></span>
          </Link>)}
          <Link className="nav-link" to="/search">
            <span className="d-none d-md-inline">Search</span>
            <span className="d-xs-inline d-md-none"><BsSearch/></span>
          </Link>
        {/* <Link className="nav-link" to="/bookmark">Bookmark</Link> */}
        {/* {(!currentUser &&  */}
          <Link className="nav-link" to="/login">
            <span className="d-none d-md-inline">Login</span>
            <span className="d-xs-inline d-md-none"><AiOutlineLogin/></span>
          </Link>
          {/* )} */}
        {(!currentUser && 
          <Link className="nav-link" to="/register">
            <span className="d-none d-md-inline">Register</span>
            <span className="d-xs-inline d-md-none"><MdAppRegistration/></span>
          </Link>)}
        {(currentUser &&
          <Link className="nav-link" to="/profile">
            <span className="d-none d-md-inline">Profile</span>
            <span className="d-xs-inline d-md-none"><FiUser/></span>
          </Link>)}
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