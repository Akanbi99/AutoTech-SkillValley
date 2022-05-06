import React from 'react'
import Web from './web.jpg'
import dsa from './dsa.png'

const CourseList = () => {
  return (
    <div>
       <h2 className='course-heading'>
           Online Learning Courses
       </h2>
       <div className='course-div'>
           <div>
                 <img src={Web} alt='WEb'/>
                 <p className='course-name'> Web Development</p>
                 <button className='join-btn'>Join</button>
           </div>
           <div>
                 <img src={dsa} alt='DSA'/>
                 <p className='course-name'>Data Structure and Algorithms</p>
                 <button className='join-btn'>Join</button>
           </div>
       </div>
    </div>
  )
}

export default CourseList