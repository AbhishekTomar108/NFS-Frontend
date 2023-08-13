import React from 'react'
import Group131 from "../image/Group 131.png"
import laptop from "../image/Laptop.png"
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>

    <div className='sidebar-head'>
      <div className="user-image">
        <img src={Group131}></img>
      </div>

      <div className='user-detail'>
      <h3>John Smith</h3>
      <h5>Admin</h5>
      </div>
    </div>

    <hr></hr>

   <div className='sidebar-list'>
    <ul>
      <li>
        <img src={laptop}></img>
        <span>Dashboard</span>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Student</span>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Parents</span>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Media</span>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Teachers</span>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Users</span>
        </li> 
      <li>
        <img src={laptop}></img>
        <Link to='/academic'>  <span>Academic</span></Link>
        </li> 
      <li>
        <img src={laptop}></img>
        <Link to='/attendance'>  <span>Attendance</span></Link>
        </li> 
      <li>
        <img src={laptop}></img>
        <Link to='/exam'>  <span>Exam</span></Link>
        </li> 
      <li>
        <img src={laptop}></img>
        <Link to='/mark'>   <span>Mark</span></Link>
        </li> 
      <li>
        <img src={laptop}></img>
       <Link to='/message'> <span>Message</span></Link>
        </li> 
      <li>
        <img src={laptop}></img>
        <Link to='/online-exam'><span>Online Exam</span></Link>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Payroll</span>
        </li> 
      <li>
        <img src={laptop}></img>
        <Link to='/asset-management'>  <span>Asset Management</span></Link>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Inventory</span>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Leave Application</span>
        </li> 
      <li>
        <img src={laptop}></img>
       <Link to='/gmeet'> <span>Gmeet</span></Link>
        </li> 
      <li>
        <img src={laptop}></img>
        <Link to='/tutorial'> <span>Tutorial</span></Link>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Zoom Meeting</span>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Media</span>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Library</span>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Transport</span>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Hostel</span>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Sponsorship</span>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Account</span>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Announcement</span>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Report</span>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Online Admission</span>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Visitor Information</span>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Administrator</span>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Frontend</span>
        </li> 
      <li>
        <img src={laptop}></img>
        <span>Settings</span>
        </li> 
    </ul>
    </div>
    </div>
  )
}

export default Sidebar