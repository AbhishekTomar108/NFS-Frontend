import React from 'react'
import users from "../image/Users-2.png"
import Ellipse from "../image/Ellipse 84.png"
import Ellipse85 from "../image/Ellipse 85.png"
import Star from "../image/Star 1.png"
import Group75 from "../image/Group 75.png"
import Group74 from "../image/Group 74.png"
import Group73 from "../image/Group 73.png"
import Sidebar from './Sidebar'


const Message = () => {
  return (
    <div className='users-container'>
    <Sidebar/>

<div className='users-dashboard-container'>

<div className='message-btn-color-group-section'>
    <div className='message-btn-group'>
        <div className='message-btn'>
            <span>Conversation</span>
            <img src={Star}></img>
        </div>
        <div className='message-btn'>
            <span>Conversation</span>
            <img src={Star}></img>
        </div>
        <div className='message-btn'>
            <span>Conversation</span>
            <img src={Star}></img>
        </div>
        <div className='message-btn'>
            <span>Conversation</span>
            <img src={Star}></img>
        </div>
    </div>

    <div className='color-group'>
        <img src={Group75}></img>
        <img src={Group74}></img>
        <img src={Group73}></img>
    </div>
</div>


    <div className='dashboard-table'>
        <table>
            <tr>                <th>#</th>
            <th>Status</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Attach</th>
            <th>Time</th>
            <th>Reply</th>
            </tr>
            <tr> 
           <td>1</td>
            <td><img src={Star}></img></td>
            <td>User</td>
            <td>User1@gmail.com</td>
            <td>Moderator</td>
            <td><img src={Ellipse85}></img></td>
            <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td><img src={Star}></img></td>
            <td>User</td>
            <td>User1@gmail.com</td>
            <td>Moderator</td>
            <td><img src={Ellipse85}></img></td>
            <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td><img src={Star}></img></td>
            <td>User</td>
            <td>User1@gmail.com</td>
            <td>Moderator</td>
            <td><img src={Ellipse85}></img></td>
            <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td><img src={Star}></img></td>
            <td>User</td>
            <td>User1@gmail.com</td>
            <td>Moderator</td>
            <td><img src={Ellipse85}></img></td>
            <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td><img src={Star}></img></td>
            <td>User</td>
            <td>User1@gmail.com</td>
            <td>Moderator</td>
            <td><img src={Ellipse85}></img></td>
            <td><img src={Ellipse85}></img></td>
            </tr>

        </table>

<div className='compose-btn-section'>
           <button className='compose-btn'>Compose</button>
           </div>

    </div>

</div>
</div>  
  )
}

export default Message