import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function EmployeeDetailsTable({ employees }) {

    const navigate=useNavigate();

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
            <th className="w-12 hidden">employeeId</th>
            <th className="w-12">S.N</th>
            <th className="w-48">Name</th>
            <th className="w-32">Email</th>
            <th className="w-32">Employment Type</th>
            <th className="w-32">Position</th>
            <th className="w-48">Department</th>
            <th className="w-24">Cerfiticate Verified</th>
            <th className="w-24">Trainings Completed</th>
            <th className="w-40">Action</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100">
          {employees.employees?.map((employee, index) => (
            <tr key={index}>
              <td className="truncate hidden">{employee._id}</td>
              <td className="truncate">{index + 1}</td>
              <td className="truncate">{employee.userId.firstname+" "+employee.userId.lastname}</td>
              <td className="truncate">{employee.userId.email}</td>
              <td className="truncate">{employee.employmentType}</td>
              <td className="truncate">{employee.position}</td>
              <td className="truncate">{employee.department}</td>
              <td className="truncate">{employee.isCertificateVerified ? 'Yes' : 'No'}</td>
              <td className="truncate">{employee.isTrainingCompleted ? 'Yes' : 'No'}</td>
              <td>
                <div className="flex gap-2 w-full justify-center">
                  <Button variant={'secondary'} type="button" action={(e)=>NavigateToAddEmployee(e,employee)}>
                    View
                  </Button>
                  <Button variant={'danger'} type="button">
                    Terminate
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
