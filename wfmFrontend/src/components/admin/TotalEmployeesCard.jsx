import { useEffect, useState } from "react";
import { getRequest } from "../../services/apiRequests/getRequest"

export default function TotalEmployeesCard() {


    const {GetApi}=getRequest();
    const [totalEmployees,setTotalEmployees]=useState(0);

    useEffect(()=>{
        const getTotalUsers=async()=>{
           const response=await GetApi('/api/admin/getallemployees')
           if(response){
            setTotalEmployees(response.totalEmployees)
           }
        }
        getTotalUsers();
    },[])

    return (
      <div className="flex flex-col gap-2 shadow-md shadow-blue-200 rounded-md px-2 py-2 border w-full">
          <h1 className="font-semibold text-lg">Employees</h1>
          <hr/>
          <span>Total: {totalEmployees}</span>

      </div>
    )
  }
  