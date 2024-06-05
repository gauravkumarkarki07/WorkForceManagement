import { Routes, Route } from 'react-router-dom';
import SideNavBar from "./SideNavBar";
import Dashboard from "../pages/Dashboard";
import Employees from '../pages/Employees.jsx';
import Users from '../pages/Users.jsx';
import Header from './Header.jsx';
import PrivateAdmin from './PrivateAdmin.jsx';
import AdminDashboard from '../pages/AdminDashboard.jsx';
import AddEmployee from '../pages/AddEmployee.jsx';

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
          </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}
