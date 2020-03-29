import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.component.css'

const Sidebar = (props)=> {
    return (
      <nav  id="sidebar" className={props.openSidebar?'':'active'}>
        <div>
          <div className="sidebar-header">
            <h3>Shop</h3>
          </div>
          <ul className="list-unstyled components">
            <li className="active">
              <Link className="slink" to="/dashboard">Home</Link>
            </li>
            <li>
              <Link className="slink" to="/about">About</Link>
            </li>
            <li>
              <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle slink">Product</a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <Link className="slink" to="/add product">Add Product</Link>
                </li>
                <li>
                  <Link className="slink" to="/view product">View Products</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="slink" to="/messages">Messages</Link>
            </li>
          </ul>
  
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" style={{ width: '200px', margin: '10px' }} type="search" placeholder="Search Product" aria-label="Search" />
            <button type="submit" style={{ marginLeft: '10px' }} className="btn btn-success">Search</button>
          </form>
        </div>
      </nav>
    )

}

export default Sidebar;