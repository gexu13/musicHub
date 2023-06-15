import { Link } from "react-router-dom";
function Nav() {
 return (
   <nav className="nav nav-tabs mb-2">
     <Link className="nav-link" to="/home">Home</Link>
     <Link className="nav-link" to="/search">Search</Link>
     <Link className="nav-link" to="/bookmark">Bookmark</Link>
     <Link className="nav-link" to="/login">Login</Link>
     <Link className="nav-link" to="/register">Register</Link>
     <Link className="nav-link" to="/profile">Profile</Link>
   </nav>
 );
}
export default Nav;