import React from 'react';
import { NavLink } from 'react-router-dom';

import Auth from '../Auth'

const navStyle = {
    color: '#eeeeee',
    display: 'block',
    background: '#3e444a',
    padding: '8px 15px',
    borderRadius: '4px'
}


const Nav = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-3">
            <NavLink className="navbar-brand" to="/">Logo</NavLink>
            <ul className="navbar-nav w-100">
                <li className="nav-item">
                    <NavLink activeStyle={ navStyle } className="nav-link" to="/home" exact >Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeStyle={ navStyle } className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeStyle={ navStyle } className="nav-link" to="/contact">Contact Us</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeStyle={ navStyle } className="nav-link" to="/mobile">Mobile</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeStyle={ navStyle } className="nav-link" to="/books">Books</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeStyle={ navStyle } className="nav-link" to="/post-forms">Post Form</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeStyle={ navStyle } className="nav-link" to="/posts">Post Items</NavLink>
                </li>

                {/* <li className="nav-item">
                    <NavLink activeStyle={ navStyle } className="nav-link" to="/test/:postId">Single Post</NavLink>
                </li> */}

                <li className="nav-item dropdown">
                    <NavLink activeStyle={ navStyle } className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
                        Dropdown link
                    </NavLink>
                    <div className="dropdown-menu">
                        <NavLink activeStyle={ navStyle } className="dropdown-item" to="#">Link 1</NavLink>
                        <NavLink activeStyle={ navStyle } className="dropdown-item" to="#">Link 2</NavLink>
                        <NavLink activeStyle={ navStyle } className="dropdown-item" to="#">Link 3</NavLink>
                    </div>
                </li>

                {/* <li className="nav-item ml-auto">
                    <NavLink activeStyle={ navStyle } className="nav-link" to="/login">Log In</NavLink>
                </li> */}

                <li className="nav-item ml-auto">
                    {Auth.isLogin && <NavLink activeStyle={ navStyle } className="nav-link" to="/logout">Log Out</NavLink> }
                </li>
            </ul>
        </nav>
    )
}

export default Nav