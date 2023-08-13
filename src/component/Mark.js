import React, {useState} from 'react'
import Ellipse85 from "../image/Ellipse 85.png"
import Ellipse from "../image/Ellipse 84.png"
import Sidebar from './Sidebar'
import users from "../image/Users-2.png"

const Mark = () => {
    const [pageStatus, setPageStatus] = useState("mark")

  return (
    <div className='users-container'>
    <Sidebar/>

<div className='Academic-container'>
<div className='class-btn-group-section'>
<button onClick={e=>setPageStatus("mark")}>Mark</button>
<button onClick={e=>setPageStatus("mark destination")}>Mark Destination</button>
<button onClick={e=>setPageStatus("promotion")}>Promotion</button>



</div>
{ pageStatus==="mark" && <div className='users-dashboard-container'>


<div className='users-dashboard-top'>
    
        <div className='users-logo'>
            <img src={users}></img>
        </div>

        <div className='search-input'>
            <input placeholder='search'></input>
        </div>

        <div className='add-user'>
            <button>Add Mark</button>
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
            <th>Photo</th>
            <th>Name</th>
            <th>Roll</th>
            <th>Email</th>
            <th>Action</th>
           
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

{pageStatus==="mark destination" && <div className='users-dashboard-container'>


<div className='users-dashboard-top'>

    <div className='users-logo'>
        <img src={users}></img>
    </div>

    <div className='search-input'>
        <input placeholder='search'></input>
    </div>

    <div className='add-user'>
        <button>Add Mark Destination</button>
    </div>

</div>


<div className='dashboard-table'>
    <table>
        <tr>                <th>#</th>
        <th>Mark Value</th>
        <th>Mark Distribution</th>
        <th>Action</th>

        </tr>
        <tr> 
       <td>1</td>
        <td>70</td>
        <td>1</td>
       <td><img src={Ellipse85}></img></td>
        </tr>
        <tr> 
       <td>1</td>
      
        <td>70</td>
        <td>2</td> 
       <td><img src={Ellipse85}></img></td>
        </tr>
        <tr> 
       <td>1</td>
       
        <td>70</td>
        <td>3</td> 
       <td><img src={Ellipse85}></img></td>
        </tr>
        <tr> 
       <td>1</td>
       
        <td>70</td>
        <td>4</td> 
       <td><img src={Ellipse85}></img></td>
        </tr>
        <tr> 
       <td>1</td>
        
        <td>70</td>
        <td>5</td>
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

{pageStatus==="promotion" && <div className='users-dashboard-container'>


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



</div>
</div>
  )
}

export default Mark