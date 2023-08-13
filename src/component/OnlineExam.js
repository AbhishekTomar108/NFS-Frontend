import React, {useState} from 'react'
import Ellipse85 from "../image/Ellipse 85.png"
import Ellipse from "../image/Ellipse 84.png"
import Sidebar from './Sidebar'
import users from "../image/Users-2.png"

const OnlineExam = () => {
    const [pageStatus, setPageStatus] = useState("take exam")
    return (
        <div className='users-container'>
        <Sidebar/>
    
    <div className='Academic-container'>
    <div className='class-btn-group-section'>
    <button onClick={e=>setPageStatus("take exam")}>Take Exam</button>
    <button onClick={e=>setPageStatus("instruction")}>Instruction</button>
    <button onClick={e=>setPageStatus("online exam")}>Online Exam</button>
    <button onClick={e=>setPageStatus("question bank")}>Question Bank</button>
    <button onClick={e=>setPageStatus("question level")}>Question Level</button>
    <button onClick={e=>setPageStatus("question group")}>Question Group</button>
    
    
    </div>
    { pageStatus==="take exam" && <div className='users-dashboard-container'>
    
    
    <div className='users-dashboard-top'>
        
            <div className='users-logo'>
                <img src={users}></img>
            </div>
    
            <div className='search-input'>
                <input placeholder='search'></input>
            </div>
    
            <div className='add-user'>
                <button>Add Take Exam</button>
            </div>
        
    </div>
    
    
        <div className='dashboard-table'>
            <table>
                <tr>                <th>#</th>
                <th>Name</th>
                <th>Exam Status</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Action</th>
                </tr>
                <tr> 
               <td>1</td>
                <td>User 1</td>
                <td>1</td>
                <td>1</td>
                <td>22June, 2023</td>
               <td><img src={Ellipse85}></img></td>
                </tr>
                <tr> 
              <td>1</td>
                <td>User 1</td>
                <td>1</td>
                <td>1</td>
                <td>22June, 2023</td>
               <td><img src={Ellipse85}></img></td>
                </tr>
                <tr> 
              <td>1</td>
                <td>User 1</td>
                <td>1</td>
                <td>1</td>
                <td>22June, 2023</td>
               <td><img src={Ellipse85}></img></td>
                </tr>
                <tr> 
              <td>1</td>
                <td>User 1</td>
                <td>1</td>
                <td>1</td>
                <td>22June, 2023</td>
               <td><img src={Ellipse85}></img></td>
                </tr>
                <tr> 
              <td>1</td>
                <td>User 1</td>
                <td>1</td>
                <td>1</td>
                <td>22June, 2023</td>
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
    
    {pageStatus==="instruction" && <div className='users-dashboard-container'>
    
    
    <div className='users-dashboard-top'>
    
        <div className='users-logo'>
            <img src={users}></img>
        </div>
    
        <div className='search-input'>
            <input placeholder='search'></input>
        </div>
    
        <div className='add-user'>
            <button>Add Instruction</button>
        </div>
    
    </div>
    
    
    <div className='dashboard-table online-exam-dashboard-table'>
        <table>
            <tr>                <th>#</th>
            <th>Title</th>
            <th className='online-exam-dashboard-table-th'>Content</th>
            <th>Action</th>
            </tr>
            <tr> 
           <td>1</td>
            <td>Title 1</td>
            <td>Lorem Ipsum is dummy pummy</td>
  
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Title 1</td>
            <td>Lorem Ipsum is dummy pummy</td>
  
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Title 1</td>
            <td>Lorem Ipsum is dummy pummy</td>
  
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Title 1</td>
            <td>Lorem Ipsum is dummy pummy</td>
  
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
            <td>1</td>
            <td>Title 1</td>
            <td>Lorem Ipsum is dummy pummy</td>
  
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
    
    {pageStatus==="online exam" && <div className='users-dashboard-container'>
    
    
    <div className='users-dashboard-top'>
    
        <div className='users-logo'>
            <img src={users}></img>
        </div>
    
        <div className='search-input'>
            <input placeholder='search'></input>
        </div>
    
        <div className='add-user'>
            <button>Add Online Exam</button>
        </div>
    
    </div>
    
    
    <div className='dashboard-table'>
        <table>
            <tr>                <th>#</th>
            <th>Exam Title</th>
            <th>Exam Status</th>
            <th>Date</th>
            <th>Published</th>
            <th>Action</th>
            </tr>
            <tr> 
           <td>1</td>
            <td>Title 1</td>
            <td>Multiple</td>
            <td>22June, 2023</td>
            <td><label className="switch">
    <input type="checkbox"/>
    <span className="slider round"></span>
  </label></td>
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Title 1</td>
            <td>Multiple</td>
            <td>22June, 2023</td>
            <td><label className="switch">
    <input type="checkbox"/>
    <span className="slider round"></span>
  </label></td>
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Title 1</td>
            <td>Multiple</td>
            <td>22June, 2023</td>
            <td><label className="switch">
    <input type="checkbox"/>
    <span className="slider round"></span>
  </label></td>
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Title 1</td>
            <td>Multiple</td>
            <td>22June, 2023</td>
            <td><label className="switch">
    <input type="checkbox"/>
    <span className="slider round"></span>
  </label></td>
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Title 1</td>
            <td>Multiple</td>
            <td>22June, 2023</td>
            <td><label className="switch">
    <input type="checkbox"/>
    <span className="slider round"></span>
  </label></td>
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
  
    {pageStatus==="question bank" && <div className='users-dashboard-container'>
    
    
    <div className='users-dashboard-top'>
    
        <div className='users-logo'>
            <img src={users}></img>
        </div>
    
        <div className='search-input'>
            <input placeholder='search'></input>
        </div>
    
        <div className='add-user'>
            <button>Add Question Bank</button>
        </div>
    
    </div>
    
    
    <div className='dashboard-table'>
        <table>
            <tr>                <th>#</th>
            <th>Difficulty level</th>
            <th>Question</th>
            <th>Question Grp.</th>
            <th>Type</th>
            <th>Action</th>
            </tr>
            <tr> 
           <td>1</td>
            <td>Medium</td>
            <td>Multiple</td>
            <td>22June, 2023</td>
            <td>Single</td>
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Medium</td>
            <td>Lorem Ipsum dummy pummy</td>
            <td>Computer</td>
            <td>Single</td>  <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Medium</td>
            <td>Lorem Ipsum dummy pummy</td>
            <td>Computer</td>
            <td>Single</td>  <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Medium</td>
            <td>Lorem Ipsum dummy pummy</td>
            <td>Computer</td>
            <td>Single</td>  <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
           <td>1</td>
            <td>Medium</td>
            <td>Lorem Ipsum dummy pummy</td>
            <td>Computer</td>
            <td>Single</td>  <td><img src={Ellipse85}></img></td>
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
  
    {pageStatus==="question level" && <div className='users-dashboard-container'>
    
    
    <div className='users-dashboard-top'>
    
        <div className='users-logo'>
            <img src={users}></img>
        </div>
    
        <div className='search-input'>
            <input placeholder='search'></input>
        </div>
    
        <div className='add-user'>
            <button>Add Question Level</button>
        </div>
    
    </div>
    
    
    <div className='dashboard-table online-exam-dashboard-table'>
        <table>
            <tr>                <th>#</th>
            <th className='online-exam-dashboard-table-th'>Title</th>
            <th>Action</th>
            </tr>
            <tr> 
           <td>1</td>
            <td>Medium</td>
           
  
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
          <td>1</td>
            <td>Medium</td>
         
  
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
          <td>1</td>
            <td>Medium</td>
         
  
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
          <td>1</td>
            <td>Medium</td>
         
  
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
            <td>1</td>
            <td>Medium</td>
         
  
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
  
  
   {pageStatus==="question group" && <div className='users-dashboard-container'>
    
    
    <div className='users-dashboard-top'>
    
        <div className='users-logo'>
            <img src={users}></img>
        </div>
    
        <div className='search-input'>
            <input placeholder='search'></input>
        </div>
    
        <div className='add-user'>
            <button>Add Question Group</button>
        </div>
    
    </div>
    
    
    <div className='dashboard-table online-exam-dashboard-table'>
        <table>
            <tr>                <th>#</th>
            <th className='online-exam-dashboard-table-th'>Title</th>
            <th>Action</th>
            </tr>
            <tr> 
           <td>1</td>
            <td>Medium</td>
           
  
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
          <td>1</td>
            <td>Medium</td>
         
  
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
          <td>1</td>
            <td>Medium</td>
         
  
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
          <td>1</td>
            <td>Medium</td>
         
  
           <td><img src={Ellipse85}></img></td>
            </tr>
            <tr> 
            <td>1</td>
            <td>Medium</td>
         
  
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

export default OnlineExam