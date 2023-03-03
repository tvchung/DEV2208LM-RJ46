import React from "react";
import { Link, Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav>
        {/* <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/categories">Categories</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
        </ul> */}
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/categories'}>Categories</Link>
          </li>
          <li>
            <Link to={'/about'}>About Us</Link>
          </li>
          <li>
            <Link to={'/course'}>Course</Link>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Menu;
