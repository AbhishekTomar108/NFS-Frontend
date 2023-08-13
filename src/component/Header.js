import React from 'react'
import Group130 from '../image/Group 130.png'
import Group48 from '../image/Group 48.png'

const Header = () => {
  return (
    <div className='header-container'>

        <h2>School Management</h2>
         
         <div className='header-user-details'>
         <div className="user-image">
        <img src={Group48}></img>
      </div>
         <div className="user-image">
        <img src={Group130}></img>
      </div>

      <div className='user-detail'>
      <h3>John Smith</h3>
      <h5>Admin</h5>
      </div>
         </div>

    </div>
  )
}

export default Header