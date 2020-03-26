import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.component.css";
export const Sidebar =(props)=>{
    return(
        <div className="overlay-content">

    <Link to="/services">Add Product</Link>
    <Link to="/clients">Edit product</Link>
    <Link to="/contacts">Delete Product</Link>
  </div>
    )
}