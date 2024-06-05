import { useEffect, useState } from "react";
import { getRequest } from "../services/apiRequests/getRequest";
import EmployeeDetailsTable from "../components/EmployeeDetailsTable";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Employees() {
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const { GetApi } = getRequest();

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await GetApi('/api/admin/getallemployees');
      if (response) {
        setEmployeeDetails(response);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="flex flex-col gap-4 px-4 py-2">
      <div className="flex flex-col gap-1 w-40">
        <h2 className="font-semibold text-2xl">Employees</h2>
        <Link to={'/users'}>
          <Button type="button">
            Add Employees
          </Button>
        </Link>
      </div>
      <div>
        <EmployeeDetailsTable employees={employeeDetails} />
      </div>
    </div>
  );
}
