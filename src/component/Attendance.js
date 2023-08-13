import React, {useState} from 'react'
import Ellipse85 from "../image/Ellipse 85.png"
import Ellipse from "../image/Ellipse 84.png"
import Sidebar from './Sidebar'
import users from "../image/Users-2.png"

const Attendance = () => {
    const [pageStatus, setPageStatus] = useState("user attendance")
  return (
    <div className='users-container'>
    <Sidebar/>

<div className='Academic-container'>
<div className='class-btn-group-section'>
<button onClick={e=>setPageStatus("user attendance")}>User Attendance</button>
<button onClick={e=>setPageStatus("teacher attendance")}>Teacher Attendance</button>
<button onClick={e=>setPageStatus("student attendance")}>Student Attendance</button>


</div>
{ pageStatus==="user attendance" && <div className='users-dashboard-container'>


<div className='users-dashboard-top'>
    
        <div className='users-logo'>
            <img src={users}></img>
        </div>

        <div className='search-input'>
            <input placeholder='search'></input>
        </div>

        <div className='add-user'>
            <button>Add User Attendance</button>
        </div>
    
</div>


    <div className='dashboard-table'>
        <table>
            <tr>                <th>#</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
            </tr>
            <tr> 
           <td>1</td>
            <td><img src={Ellipse}></img></td>
            <td>User 1</td>
            <td>User1@gmail.com</td>
            <td>Moderator</td>
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td><img src={Ellipse}></img></td>
            <td>User 1</td>
            <td>User1@gmail.com</td>
            <td>Class One</td>
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td><img src={Ellipse}></img></td>
            <td>User 1</td>
            <td>User1@gmail.com</td>
            <td>Class One</td>
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td><img src={Ellipse}></img></td>
            <td>User 1</td>
            <td>User1@gmail.com</td>
            <td>Class One</td>
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td><img src={Ellipse}></img></td>
            <td>User 1</td>
            <td>User1@gmail.com</td>
            <td>Class One</td>
           <td><img src={Ellipse85}></img></td>
            </tr>

        </table>

        <div className='btn-group'>
            <button>Copy</button>
            <button>Excel</button>
            <button>Csv</button>
            <button>Pdf</button>
        </div>
    </div>

</div>}

{pageStatus==="teacher attendance" && <div className='users-dashboard-container'>


<div className='users-dashboard-top'>

    <div className='users-logo'>
        <img src={users}></img>
    </div>

    <div className='search-input'>
        <input placeholder='search'></input>
    </div>

    <div className='add-user'>
        <button>Add Teacher Attendance</button>
    </div>

</div>


<div className='dashboard-table'>
    <table>
        <tr>                <th>#</th>
        <th>Section</th>
        <th>Category</th>
        <th>Capacity</th>
        <th>Teacher</th>
        <th>Action</th>
        </tr>
        <tr> 
       <td>1</td>
        <td><img src={Ellipse}></img></td>
        <td>User 1</td>
        <td>23</td>
        <td>John</td>
       <td><img src={Ellipse85}></img></td>
        </tr>
        <tr> 
       <td>1</td>
        <td><img src={Ellipse}></img></td>
        <td>User 1</td>
        <td>23</td>
        <td>John</td>
       <td><img src={Ellipse85}></img></td>
        </tr>
        <tr> 
       <td>1</td>
        <td><img src={Ellipse}></img></td>
        <td>User 1</td>
        <td>23</td>
        <td>John</td>
       <td><img src={Ellipse85}></img></td>
        </tr>
        <tr> 
       <td>1</td>
        <td><img src={Ellipse}></img></td>
        <td>User 1</td>
        <td>23</td>
        <td>John</td>
       <td><img src={Ellipse85}></img></td>
        </tr>
        <tr> 
       <td>1</td>
        <td><img src={Ellipse}></img></td>
        <td>User 1</td>
        <td>23</td>
        <td>John</td>
       <td><img src={Ellipse85}></img></td>
        </tr>

    </table>
    <div className='btn-group'>
            <button>Copy</button>
            <button>Excel</button>
            <button>Csv</button>
            <button>Pdf</button>
        </div>
    
</div>

</div>}

{pageStatus==="student attendance" && <div className='users-dashboard-container'>


<div className='users-dashboard-top'>

    <div className='users-logo'>
        <img src={users}></img>
    </div>

    <div className='search-input'>
        <input placeholder='search'></input>
    </div>

    <div className='add-user'>
        <button>Add Student Attendance</button>
    </div>

</div>


<div className='dashboard-table'>
    <table>
        <tr>                <th>#</th>
        <th>Section</th>
        <th>Category</th>
        <th>Capacity</th>
        <th>Teacher</th>
        <th>Action</th>
        </tr>
        <tr> 
       <td>1</td>
        <td><img src={Ellipse}></img></td>
        <td>User 1</td>
        <td>23</td>
        <td>John</td>
       <td><img src={Ellipse85}></img></td>
        </tr>
        <tr> 
       <td>1</td>
        <td><img src={Ellipse}></img></td>
        <td>User 1</td>
        <td>23</td>
        <td>John</td>
       <td><img src={Ellipse85}></img></td>
        </tr>
        <tr> 
       <td>1</td>
        <td><img src={Ellipse}></img></td>
        <td>User 1</td>
        <td>23</td>
        <td>John</td>
       <td><img src={Ellipse85}></img></td>
        </tr>
        <tr> 
       <td>1</td>
        <td><img src={Ellipse}></img></td>
        <td>User 1</td>
        <td>23</td>
        <td>John</td>
       <td><img src={Ellipse85}></img></td>
        </tr>
        <tr> 
       <td>1</td>
        <td><img src={Ellipse}></img></td>
        <td>User 1</td>
        <td>23</td>
        <td>John</td>
       <td><img src={Ellipse85}></img></td>
        </tr>

    </table>
    <div className='btn-group'>
            <button>Copy</button>
            <button>Excel</button>
            <button>Csv</button>
            <button>Pdf</button>
        </div>
    
</div>

</div>}
</div>
</div>
  )
}

export default Attendance