
import Sidebar from './component/Sidebar';
import './css/style.css'
import './css/default.css'
import Header from './component/Header';
import Users from './component/Users';

import {
  // BrowserRouter as Router,
  BrowserRouter,
  Routes,
  Route,
  HashRouter
 
} from "react-router-dom";
import Message from './component/Message';
import Gmeet from './component/Gmeet';
import Tutorial from './component/Tutorial';
import Academic from './component/Academic';
import Attendance from './component/Attendance';
import Exam from './component/Exam';
import Mark from './component/Mark';
import OnlineExam from './component/OnlineExam';
import AssetManagement from './component/AssetManagement';
import Login from './component/NFS-login-portal/Login';
import SignUp from './component/NFS-login-portal/SignUp';
import Registration from './component/NFS-login-portal/Registration';
import AddPerson from './component/AddPerson';

function App() {
  return (
    <>
     <BrowserRouter>
        <Header/>
        <Routes>
        <Route  exact path="/" element={<Users/>}/>
        <Route  exact path="dashboard/addPeople" element={<AddPerson/>}/>
        <Route  exact path="login" element={<Login/>}/>
        <Route  exact path="registration" element={<Registration/>}/>
        <Route  exact path="/signup" element={<SignUp/>}/>
        <Route  exact path="message" element={<Message/>}/>
        <Route  exact path="gmeet" element={<Gmeet/>}/>
        <Route  exact path="tutorial" element={<Tutorial/>}/>
        <Route  exact path="academic" element={<Academic/>}/>
        <Route  exact path="attendance" element={<Attendance/>}/>
        <Route  exact path="exam" element={<Exam/>}/>
        <Route  exact path="mark" element={<Mark/>}/>
        <Route  exact path="online-exam" element={<OnlineExam/>}/>
        <Route  exact path="asset-management" element={<AssetManagement/>}/>
        </Routes>
          </BrowserRouter>
  
    </>
  );
}

export default App;
