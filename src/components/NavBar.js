import React from 'react';
import '../App.css';

const NavBar = () => (
  <nav className="flex">
    <div className="navbar flex">
      <div className="logo">Bookstore CMS</div>
      <div className="heading selected">Books</div>
      <div className="heading">Categories</div>
    </div>
    <div className="profile">
      <i className="fa fa-user" />
    </div>
  </nav>
);

export default NavBar;
