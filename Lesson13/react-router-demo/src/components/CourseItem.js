import React from 'react'
import { useParams } from 'react-router-dom';

const CourseItem = () => {
    let { id } = useParams();
  return (
    <div>
      <h4>CourseItem # {id}</h4>
    </div>
  )
}

export default CourseItem
