import React, {useState} from 'react'
import Ellipse85 from "../image/Ellipse 85.png"
import Ellipse from "../image/Ellipse 84.png"
import Sidebar from './Sidebar'
import users from "../image/Users-2.png"

const AssetManagement = () => {
    const [pageStatus, setPageStatus] = useState("location")
    return (
        <div className='users-container'>
        <Sidebar/>
    
    <div className='Academic-container'>
    <div className='class-btn-group-section'>
    <button onClick={e=>setPageStatus("location")}>Location</button>
    <button onClick={e=>setPageStatus("vendor")}>Vendor</button>
    <button onClick={e=>setPageStatus("asset")}>Asset</button>
    <button onClick={e=>setPageStatus("asset category")}>Asset Category</button>
    <button onClick={e=>setPageStatus("asset assignment")}>Asset Assignment</button>
    <button onClick={e=>setPageStatus("purchase")}>Purchase</button>
    
    
    </div>
    {pageStatus==="location" && <div className='users-dashboard-container'>
    
    
    <div className='users-dashboard-top'>
    
        <div className='users-logo'>
            <img src={users}></img>
        </div>
    
        <div className='search-input'>
            <input placeholder='search'></input>
        </div>
    
        <div className='add-user'>
            <button>Add Location</button>
        </div>
    
    </div>
    
    
    <div className='dashboard-table online-exam-dashboard-table'>
        <table>
            <tr>                <th>#</th>
            <th className='online-exam-dashboard-table-th'>Location</th>
            <th className='online-exam-dashboard-table-th'>Description</th>
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
    
    {pageStatus==="vendor" && <div className='users-dashboard-container'>
    
    
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
    
    { pageStatus==="asset" && <div className='users-dashboard-container'>
    
    
    <div className='users-dashboard-top'>
        
            <div className='users-logo'>
                <img src={users}></img>
            </div>
    
            <div className='search-input'>
                <input placeholder='search'></input>
            </div>
    
            <div className='add-user'>
                <button>Add Asset</button>
            </div>
        
    </div>
    
    
        <div className='dashboard-table'>
            <table>
                <tr>                <th>#</th>
                <th>Section</th>
                <th>Title</th>
                <th>Status</th>
                <th>Category</th>
                <th>Location</th>
                <th>Action</th>
                </tr>
                <tr> 
               <td>1</td>
                <td>001</td>
                <td>Cricket Ball</td>
                <td>In Storage</td>
                <td>Sports</td> <td>Store Room</td>
               <td><img src={Ellipse85}></img></td>
                </tr>
                <tr> 
              <td>1</td>
                <td>001</td>
                <td>Cricket Ball</td>
                <td>In Storage</td>
                <td>Sports</td> <td>Store Room</td>
               <td><img src={Ellipse85}></img></td>
                </tr>
                <tr> 
              <td>1</td>
                <td>001</td>
                <td>Cricket Ball</td>
                <td>In Storage</td>
                <td>Sports</td> <td>Store Room</td>
               <td><img src={Ellipse85}></img></td>
                </tr>
                <tr> 
              <td>1</td>
                <td>001</td>
                <td>Cricket Ball</td>
                <td>In Storage</td>
                <td>Sports</td> <td>Store Room</td>
               <td><img src={Ellipse85}></img></td>
                </tr>
                <tr> 
              <td>1</td>
                <td>001</td>
                <td>Cricket Ball</td>
                <td>In Storage</td>
                <td>Sports</td> <td>Store Room</td>
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
  
    {pageStatus==="asset category" && <div className='users-dashboard-container'>
    
    
    <div className='users-dashboard-top'>
    
        <div className='users-logo'>
            <img src={users}></img>
        </div>
    
        <div className='search-input'>
            <input placeholder='search'></input>
        </div>
    
        <div className='add-user'>
            <button>Add Asset Category</button>
        </div>
    
    </div>
    
    
    <div className='dashboard-table online-exam-dashboard-table'>
        <table>
            <tr>                <th>#</th>
            <th className='online-exam-dashboard-table-th'>Category</th>
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
  
    { pageStatus==="asset assignment" && <div className='users-dashboard-container'>
    
    
    <div className='users-dashboard-top'>
        
            <div className='users-logo'>
                <img src={users}></img>
            </div>
    
            <div className='search-input'>
                <input placeholder='search'></input>
            </div>
    
            <div className='add-user'>
                <button>Add Asset Assignment</button>
            </div>
        
    </div>
    
    
        <div className='dashboard-table'>
            <table>
                <tr>                <th>#</th>
                <th>Asset</th>
                <th>Assign Qty.</th>
                <th>Role</th>
                <th>Check Out to</th>
                <th>Due Date</th>
                <th>Due Date</th>
                <th>Due Date</th>
                <th>Due Date</th>
                <th>Due Date</th>
               
                </tr>
                <tr> 
               <td>1</td>
                <td>Exam 1</td>
                <td>759</td>
                <td>1</td>
                <td>Subject 1</td> <td>22July, 2023</td>
               
                </tr>
                <tr> 
              <td>1</td>
                <td>Exam 1</td>
                <td>759</td>
                <td>1</td>
                <td>Subject 1</td> <td>22July, 2023</td>
             
                </tr>
                <tr> 
              <td>1</td>
                <td>Exam 1</td>
                <td>759</td>
                <td>1</td>
                <td>Subject 1</td> <td>22July, 2023</td>
              
                </tr>
                <tr> 
              <td>1</td>
                <td>Exam 1</td>
                <td>759</td>
                <td>1</td>
                <td>Subject 1</td> <td>22July, 2023</td>
              
                </tr>
                <tr> 
              <td>1</td>
                <td>Exam 1</td>
                <td>759</td>
                <td>1</td>
                <td>Subject 1</td> <td>22July, 2023</td>
              
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
  
  
   {pageStatus==="purchase" && <div className='users-dashboard-container'>
    
    
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

export default AssetManagement