import { Routes, Route } from 'react-router-dom';
import SideNavBar from "./SideNavBar";
import Dashboard from "../pages/Dashboard";
import Employees from '../pages/Employees.jsx';
import Users from '../pages/Users.jsx';
import Header from './Header.jsx';
import PrivateAdmin from './PrivateAdmin.jsx';
import AdminDashboard from '../pages/AdminDashboard.jsx';
import AddEmployee from '../pages/AddEmployee.jsx';
import Unauthorized from '../pages/Unauthorized.jsx';
import PrivateEmplpoyee from '../components/PrivateEmployee.jsx';
import Rostering from '../pages/Rostering.jsx';
import Profile from '../pages/Profile.jsx';
import LeaveManagement from '../pages/LeaveManagement.jsx';

export default function LayoutPage() {
  return (
    <div className="flex h-screen">
      <div className="w-[20%] h-full">
        <SideNavBar />
      </div>
      <div className="w-[80%]">
        <Header/>
        <Routes>
          <Route element={<PrivateAdmin/>}>
            <Route path="/admindashboard" element={<AdminDashboard/>}/>
            <Route path="/employees" element={<Employees />} />
            <Route path="/users" element={<Users/>} />
            <Route path="/addemployee" element={<AddEmployee/>} />
            <Route path="/rostering" element={<Rostering/>} />
          </Route>
          <Route element={<PrivateEmplpoyee/>}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/leavemanagement" element={<LeaveManagement />} />
          </Route>
        <Route path="/unauthorized" element={<Unauthorized/>} />
        <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
    </div>
  );
}
