import React from 'react'
import { Outlet } from 'react-router-dom'

const Course = () => {
  return (
    <div>
      <h2>Course</h2>
      <Outlet></Outlet>
    </div>
  )
}

export default Course
