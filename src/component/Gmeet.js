import React from 'react'
import users from "../image/Users-2.png"
import Ellipse from "../image/Ellipse 84.png"
import Ellipse85 from "../image/Ellipse 85.png"
import Sidebar from './Sidebar'

const Gmeet = () => {
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
            <button>Add Gmeet</button>
        </div>
    
</div>


    <div className='dashboard-table'>
        <table>
            <tr>                <th>#</th>
            <th>Title</th>
            <th>Date</th>
            <th>Class/Section</th>
            <th>Host</th>
            <th>Status</th>
            <th>Action</th>
            </tr>
            <tr> 
           <td>1</td>
            <td>Maths Class</td>
            <td>User</td>
            <td>User1@gmail.com</td>
            <td>Moderator</td>
            <td><img src={Ellipse85}></img></td>
            <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Maths Class</td>
            <td>User</td>
            <td>User1@gmail.com</td>
            <td>Moderator</td>
            <td><img src={Ellipse85}></img></td>
            <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Maths Class</td>
            <td>User</td>
            <td>User1@gmail.com</td>
            <td>Moderator</td>
            <td><img src={Ellipse85}></img></td>
            <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Maths Class</td>
            <td>User</td>
            <td>User1@gmail.com</td>
            <td>Moderator</td>
            <td><img src={Ellipse85}></img></td>
            <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Maths Class</td>
            <td>User</td>
            <td>User1@gmail.com</td>
            <td>Moderator</td>
            <td><img src={Ellipse85}></img></td>
            <td><img src={Ellipse85}></img></td>
            </tr>

        </table>
    </div>

</div>
</div>
  )
}

export default Gmeet