import Button from "./Button";
import { putRequest } from "../services/apiRequests/putRequest";
import { useNavigate } from "react-router-dom";

export default function UserDetailsTable({ users }) {

    const navigate=useNavigate();

  const { PutApi } = putRequest();


  const NavigateToAddEmployee=(e,user)=>{
    e.preventDefault();
    navigate('/addemployee',{state:{
        user
    }})
  }

  return (
    <div className="w-full overflow-x-auto rounded-md">
      <table className="table-fixed text-center w-full px-2">
        <thead className="bg-gray-400">
          <tr>
            <th className="w-12 hidden">userId</th>
            <th className="w-12">S.N</th>
            <th className="w-32">First Name</th>
            <th className="w-48">Email</th>
            <th className="w-32">Phone Number</th>
            <th className="w-48">Address</th>
            <th className="w-24">Is Employee</th>
            <th className="w-24">Is Admin</th>
            <th className="w-40">Action</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100">
          {users.map((user, index) => (
            <tr key={index}>
              <td className="truncate hidden">{user._id}</td>
              <td className="truncate">{index + 1}</td>
              <td className="truncate">{user.firstname}</td>
              <td className="truncate">{user.email}</td>
              <td className="truncate">{user.phonenumber}</td>
              <td className="truncate">{user.address}</td>
              <td className="truncate">{user.isEmployee ? 'Yes' : 'No'}</td>
              <td className="truncate">{user.isAdmin ? 'Yes' : 'No'}</td>
              <td>
                <div className="flex gap-2 w-full justify-center">
                      <Button variant={'primary'} type="button" action={(e)=>NavigateToAddEmployee(e,user)}>
                         Add Employee
                      </Button>
                      <Button variant={'danger'} type="button">
                      Delete User
                    </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
