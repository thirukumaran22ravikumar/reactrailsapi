import { Outlet, Link } from "react-router-dom";
import './Layout.css'
const Layout = () => {
  return (
    <div className="navbar">
      <h1 className="title">Emart</h1>
      <nav>
        <ul className="content">
          <li>
            <Link to="/" className="text">Home</Link>
          </li>
          <li>
            <Link to="/create" className="text" >Create Member</Link>
          </li>
          <li>
            <Link to="/create_product" className="text">Create Product</Link>
          </li>

          <li>
            <Link to="/contact" className="text" >Contact</Link>
          </li>
          <li>
            <Link to="/contact" className="text" >Log out</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};


export default Layout;