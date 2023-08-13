import React, {useState} from 'react'
import Ellipse85 from "../image/Ellipse 85.png"
import Ellipse from "../image/Ellipse 84.png"
import Sidebar from './Sidebar'
import users from "../image/Users-2.png"

const Exam = () => {
    const [pageStatus, setPageStatus] = useState("exam attendance")
  return (
    <div className='users-container'>
    <Sidebar/>

<div className='Academic-container'>
<div className='class-btn-group-section'>
<button onClick={e=>setPageStatus("exam attendance")}>Exam Attendance</button>
<button onClick={e=>setPageStatus("exam")}>Exam</button>
<button onClick={e=>setPageStatus("exam schedule")}>Exam Schedule</button>
<button onClick={e=>setPageStatus("grade")}>Grade</button>


</div>
{ pageStatus==="exam attendance" && <div className='users-dashboard-container'>


<div className='users-dashboard-top'>
    
        <div className='users-logo'>
            <img src={users}></img>
        </div>

        <div className='search-input'>
            <input placeholder='search'></input>
        </div>

        <div className='add-user'>
            <button>Add Exam Attendance</button>
        </div>
    
</div>


<div className='exam-class-subject-container'>
    <div className='exam-class-subject-section'>
    <div className='exam-class-subject'>
        <span>Exam</span>
        <select>
            <option disabled selected>Select Exam</option>
            <option>Exam 1</option>
            <option>Exam 1</option>
            <option>Exam 1</option>
            <option>Exam 1</option>
            <option>Exam 1</option>
        </select>
        </div>
    <div className='exam-class-subject'>
    <span>Class</span>
        <select>
            <option disabled selected>Select Class</option>
            <option>Class 1</option>
            <option>Class 1</option>
            <option>Class 1</option>
            <option>Class 1</option>
            <option>Class 1</option>
        </select>
        </div>
    <div className='exam-class-subject'>
    <span>Subject</span>
        <select>
            <option disabled selected>Select Subject</option>
            <option>Subject 1</option>
            <option>Subject 1</option>
            <option>Subject 1</option>
            <option>Subject 1</option>
            <option>Subject 1</option>
        </select>
        </div>
        </div>
        
        <div className='view-attendance-section'>
            <button>View Attendance</button>
            </div>
    </div>


    <div className='dashboard-table'>
        <table>
            <tr>                <th>#</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Roll</th>
            <th>Email</th>
            <th>Status</th>
           
            </tr>
            <tr> 
           <td>1</td>
            <td><img src={Ellipse}></img></td>
            <td>User 1</td>
            <td>1</td>
            <td>user@gmail.com</td>
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td><img src={Ellipse}></img></td>
            <td>User 1</td>
            <td>1</td>
            <td>user@gmail.com</td>
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td><img src={Ellipse}></img></td>
            <td>User 1</td>
            <td>1</td>
            <td>user@gmail.com</td>
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td><img src={Ellipse}></img></td>
            <td>User 1</td>
            <td>1</td>
            <td>user@gmail.com</td>
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td><img src={Ellipse}></img></td>
            <td>User 1</td>
            <td>1</td>
            <td>user@gmail.com</td>
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

{pageStatus==="exam" && <div className='users-dashboard-container'>


<div className='users-dashboard-top'>

    <div className='users-logo'>
        <img src={users}></img>
    </div>

    <div className='search-input'>
        <input placeholder='search'></input>
    </div>

    <div className='add-user'>
        <button>Add Exam Attendance</button>
    </div>

</div>


<div className='dashboard-table'>
    <table>
        <tr>                <th>#</th>
        <th>Exam Name</th>
        <th>Date</th>
        <th>Note</th>
        <th>Status</th>
        </tr>
        <tr> 
       <td>1</td>
        <td>Exam 1</td>
        <td>23</td> <td>Lorem Ipsum</td>
       <td><img src={Ellipse85}></img></td>
        </tr>
        <tr> 
       <td>1</td>
      
        <td>User 1</td>
        <td>23</td> <td>Lorem Ipsum</td>
       <td><img src={Ellipse85}></img></td>
        </tr>
        <tr> 
       <td>1</td>
       
        <td>User 1</td>
        <td>23</td> <td>Lorem Ipsum</td>
       <td><img src={Ellipse85}></img></td>
        </tr>
        <tr> 
       <td>1</td>
       
        <td>User 1</td>
        <td>23</td> <td>Lorem Ipsum</td>
       <td><img src={Ellipse85}></img></td>
        </tr>
        <tr> 
       <td>1</td>
        
        <td>User 1</td>
        <td>23</td> <td>Lorem Ipsum</td>
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

{pageStatus==="exam schedule" && <div className='users-dashboard-container'>


<div className='users-dashboard-top'>

    <div className='users-logo'>
        <img src={users}></img>
    </div>

    <div className='search-input'>
        <input placeholder='search'></input>
    </div>

    <div className='add-user'>
        <button>Add Exam Schedule</button>
    </div>

</div>

<div className='exam-class-subject-container'>
    <div className='exam-class-subject-section'>
   
    <div className='exam-class-subject'>
    <span>Class</span>
        <select>
            <option disabled selected>Select Class</option>
            <option>Class 1</option>
            <option>Class 1</option>
            <option>Class 1</option>
            <option>Class 1</option>
            <option>Class 1</option>
        </select>
        </div>
  
        </div>
        
        <div className='view-attendance-section'>
            <button>View Class</button>
            </div>
    </div>


<div className='dashboard-table'>
    <table>
        <tr>                <th>#</th>
        <th>Exam Name</th>
        <th>Class</th>
        <th>Section</th>
        <th>Subject</th>
        <th>Date</th>
        </tr>
        <tr> 
       <td>1</td>
    
        <td>Exam 1</td>
        <td>Class 1</td> <td>1</td>
       <td>Subject 1</td><td>22July, 2023</td>
        </tr>
        <tr> 
       <td>1</td>
        
        <td>Exam 1</td>
        <td>Class 1</td> <td>1</td>
       <td>Subject 1</td><td>22July, 2023</td>
        </tr>
        <tr> 
       <td>1</td>
       
        <td>Exam 1</td>
        <td>Class 1</td> <td>1</td>
       <td>Subject 1</td><td>22July, 2023</td>
        </tr>
        <tr> 
       <td>1</td>
        
        <td>Exam 1</td>
        <td>Class 1</td> <td>1</td>
       <td>Subject 1</td><td>22July, 2023</td>
        </tr>
        <tr> 
       <td>1</td>
       
        <td>Exam 1</td>
        <td>Class 1</td> <td>1</td>
       <td>Subject 1</td><td>22July, 2023</td>
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

{pageStatus==="grade" && <div className='users-dashboard-container'>


<div className='users-dashboard-top'>

    <div className='users-logo'>
        <img src={users}></img>
    </div>

    <div className='search-input'>
        <input placeholder='search'></input>
    </div>

    <div className='add-user'>
        <button>Add Grade</button>
    </div>

</div>


<div className='dashboard-table'>
    <table>
        <tr>                <th>#</th>
        <th>Grade Name</th>
        <th>Point</th>
        <th>Marks</th>
        <th>Out of Marks</th>
        <th>Action</th>
        </tr>
        <tr> 
       <td>1</td>
        <td>A+</td>
        <td>5.00</td> <td>100</td><td>100</td>
       <td><img src={Ellipse85}></img></td>
        </tr>
        <tr> 
       <td>1</td>
      
        <td>A+</td>
        <td>5.00</td> <td>100</td><td>100</td>
       <td><img src={Ellipse85}></img></td>
        </tr>
        <tr> 
       <td>1</td>
       
        <td>A+</td>
        <td>5.00</td> <td>100</td><td>100</td>
       <td><img src={Ellipse85}></img></td>
        </tr>
        <tr> 
       <td>1</td>
       
        <td>A+</td>
        <td>5.00</td> <td>100</td><td>100</td>
       <td><img src={Ellipse85}></img></td>
        </tr>
        <tr> 
       <td>1</td>
        
        <td>A+</td>
        <td>5.00</td> <td>100</td><td>100</td>
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

export default Exam