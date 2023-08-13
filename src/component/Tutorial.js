import React from 'react'
import users from "../image/Users-2.png"
import Ellipse from "../image/Ellipse 84.png"
import Ellipse85 from "../image/Ellipse 85.png"
import Sidebar from './Sidebar'

const Tutorial = () => {
  return (
    <div className='users-container'>
    <Sidebar/>

<div className='users-dashboard-container'>
<div className='users-dashboard-top'>
    
        <div className='users-logo'>
            <img src={users}></img>
        </div>

        <div className='search-input'>
            <input placeholder='search'></input>
        </div>

        <div className='add-user'>
            <button>Add a Tutorial</button>
        </div>
    
</div>


    <div className='dashboard-table'>
        <table>
            <tr>                <th>#</th>
            <th>Title</th>
            <th>Date</th>
            <th>Class/Section</th>
            <th>Subject</th>
            <th>Action</th>
            </tr>
            <tr> 
           <td>1</td>
            <td>Math Class</td>
            <td>10:30/ 22 June</td>
            <td>4 - A.B,C</td>
            <td>Science</td>
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Math Class</td>
            <td>10:30/ 22 June</td>
            <td>4 - A.B,C</td>
            <td>Science</td>
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Math Class</td>
            <td>10:30/ 22 June</td>
            <td>4 - A.B,C</td>
            <td>Science</td>
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Math Class</td>
            <td>10:30/ 22 June</td>
            <td>4 - A.B,C</td>
            <td>Science</td>
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Math Class</td>
            <td>10:30/ 22 June</td>
            <td>4 - A.B,C</td>
            <td>Science</td>
           <td><img src={Ellipse85}></img></td>
            </tr>

        </table>
    </div>

</div>
</div>
  )
}

export default Tutorial