import React, {useState} from 'react'
import users from "../image/Users-2.png"
import Ellipse from "../image/Ellipse 84.png"
import Ellipse85 from "../image/Ellipse 85.png"
import Sidebar from './Sidebar'

const Academic = () => {

    const [pageStatus, setPageStatus] = useState("class")

  return (
    <div className='users-container'>
        <Sidebar/>

<div className='Academic-container'>
<div className='class-btn-group-section'>
    <button onClick={e=>setPageStatus("class")}>Class</button>
    <button onClick={e=>setPageStatus("class")}>Subject</button>
    <button onClick={e=>setPageStatus("class")}>Routine</button>
    <button onClick={e=>setPageStatus("class")}>Assignment</button>
    <button onClick={e=>setPageStatus("section")}>Section</button>
    <button onClick={e=>setPageStatus("class")}>Exam</button>
</div>
{ pageStatus==="class" && <div className='users-dashboard-container'>


    <div className='users-dashboard-top'>
        
            <div className='users-logo'>
                <img src={users}></img>
            </div>

            <div className='search-input'>
                <input placeholder='search'></input>
            </div>

            <div className='add-user'>
                <button>Add Class</button>
            </div>
        
    </div>


        <div className='dashboard-table'>
            <table>
                <tr>                <th>#</th>
                <th>Class</th>
                <th>Class Num.</th>
                <th>Teacher Name</th>
                <th>Name</th>
                <th>Action</th>
                </tr>
                <tr> 
               <td>1</td>
                <td>Four</td>
                <td>4</td>
                <td>John Smith</td>
                <td>Class One</td>
               <td><img src={Ellipse85}></img></td>
                </tr>
                <tr> 
               <td>1</td>
                <td>Four</td>
                <td>4</td>
                <td>John Smith</td>
                <td>Class One</td>
               <td><img src={Ellipse85}></img></td>
                </tr>
                <tr> 
               <td>1</td>
                <td>Four</td>
                <td>4</td>
                <td>John Smith</td>
                <td>Class One</td>
               <td><img src={Ellipse85}></img></td>
                </tr>
                <tr> 
               <td>1</td>
                <td>Four</td>
                <td>4</td>
                <td>John Smith</td>
                <td>Class One</td>
               <td><img src={Ellipse85}></img></td>
                </tr>
                <tr> 
               <td>1</td>
                <td>Four</td>
                <td>4</td>
                <td>John Smith</td>
                <td>Class One</td>
               <td><img src={Ellipse85}></img></td>
                </tr>

            </table>
        </div>

    </div>}

    {pageStatus==="section" && <div className='users-dashboard-container'>


<div className='users-dashboard-top'>
    
        <div className='users-logo'>
            <img src={users}></img>
        </div>

        <div className='search-input'>
            <input placeholder='search'></input>
        </div>

        <div className='add-user'>
            <button>Add Section</button>
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
            <td>Four</td>
            <td>4</td>
            <td>23</td>
            <td>John</td>
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Four</td>
            <td>4</td>
            <td>23</td>
            <td>John</td>
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Four</td>
            <td>4</td>
            <td>23</td>
            <td>John</td>
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Four</td>
            <td>4</td>
            <td>23</td>
            <td>John</td>
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Four</td>
            <td>4</td>
            <td>23</td>
            <td>John</td>
           <td><img src={Ellipse85}></img></td>
            </tr>

        </table>

        
    </div>

</div>}


    </div>
    </div>
  )
}

export default Academic