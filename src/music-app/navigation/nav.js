import { Link } from "react-router-dom";
function Nav() {
 return (
   <nav className="nav nav-tabs mb-2">
     <Link className="nav-link" to="/">Home</Link>
     <Link className="nav-link" to="/bookmark">Bookmark</Link>
   </nav>
 );
}
export default Nav;