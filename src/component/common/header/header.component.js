import React from 'react';
import { Link } from 'react-router-dom';
import './header.component.css';


export const Header = function (props) {

    const logout = () => {
        localStorage.clear();
    }
    
    const clickHandler=()=>{
        props.onClickNavBar();
       
    }

    let navBar = props.isLoggedIn
        ?
        <>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/dashboard">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">contact</Link>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-info my-2 my-sm-0" onClick={logout}>Logout</button>
            </form>
        </>
        :
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>
        </ul>
    return (
        <div className="main-nav">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" onClick={clickHandler} to="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {navBar}
                </div>
            </nav>
        </div>
    )
}

