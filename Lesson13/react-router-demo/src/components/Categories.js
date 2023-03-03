import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Categories = () => {
  return (
    <div>
      <h1>Categories</h1>
      <hr/>
      <ul>
          <li>
              <NavLink to={'program/1'}>Khóa học lập trình</NavLink>
          </li>
          <li>
              <NavLink to={'kid'}>Lập trình cho trẻ em</NavLink>
          </li>
          <li>
              <NavLink to={'blockchain'}>Khóa học blockchain cơ bản</NavLink>
          </li>
      </ul>
      <Outlet></Outlet>
    </div>
  )
}

export default Categories
