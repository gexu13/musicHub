import { Link } from "react-router-dom";
function Nav() {
 return (
   <nav className="nav nav-tabs mb-2">
     <Link className="nav-link" to="/music/home">Home</Link>
     <Link className="nav-link" to="/music/bookmark">Bookmark</Link>
     <Link className="nav-link" to="/music/login">Login</Link>
     <Link className="nav-link" to="/music/register">Register</Link>
     <Link className="nav-link" to="/music/profile">Profile</Link>
   </nav>
 );
}
export default Nav;