import {Link} from 'react-router-dom';
import { postRequest } from '../services/apiRequests/postRequest';
import { useDispatch } from 'react-redux';
import { logoutSuccess } from '../services/redux/user/userSlice';
import { FiUsers } from "react-icons/fi";
import { FaUsers } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";

import { useSelector } from 'react-redux';

export default function SideNavBar() {

  const session=useSelector(state=>state.user.session)

  const dispatch=useDispatch();
  const{PostApi}=postRequest();

  const logout=async(e)=>{
    e.preventDefault();
    const response=await PostApi('/api/user/logout');
    if(response){
      dispatch(logoutSuccess());
      return
    }
  }

  return (
    <div className="flex flex-col gap-8 bg-blue-800 text-white font-semibold w-full h-full px-8 py-2">
        <ul className='text-3xl text-gray-300'>Welcome {session.userDetails.username}</ul>


        {session?.userDetails.isAdmin ?
        (
          <>
          <Link to={'/admindashboard'} className='hover:underline'>
            <ul className='flex gap-2 items-center'><MdSpaceDashboard/>Admin Dashboard</ul>
          </Link>
          <Link to={'/users'} className='hover:underline'>
            <ul className='flex gap-2 items-center'><FiUsers/>Manage Users</ul>
          </Link>
          <Link to={'/employees'} className='hover:underline'>
            <ul className='flex gap-2 items-center'><FaUsers/>Manage Employees</ul>
          </Link>
          <Link to={'/rosteringandscheduling'} className='hover:underline'>
            <ul className='flex gap-2 items-center'><AiFillSchedule/>Roster & Scheduling</ul>
          </Link>
          </>
        ):(
          <Link to={'/dashboard'} className='hover:underline'>
            <ul className='flex gap-2 items-center'><MdSpaceDashboard/>Dashboard</ul>
          </Link>
        )

        }

        <Link onClick={logout} className='hover:underline'>
          <ul className='flex gap-2 items-center'><IoLogOut/>Logout</ul>
        </Link>
    </div>
  )
}
