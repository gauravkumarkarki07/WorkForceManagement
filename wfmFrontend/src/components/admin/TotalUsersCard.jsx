import { useEffect, useState } from "react";
import { getRequest } from "../../services/apiRequests/getRequest"

export default function TotalUsersCard() {


    const {GetApi}=getRequest();
    const [totalUsers,setTotalUsers]=useState(0);

    useEffect(()=>{
        const getTotalUsers=async()=>{
           const response=await GetApi('/api/admin/getallusers')
           if(response){
                setTotalUsers(response.totalUsers)
           }
        }
        getTotalUsers();
    },[])

    return (
      <div className="flex flex-col gap-2 shadow-md shadow-blue-200 rounded-md px-2 py-2 border w-full">
          <h1 className="font-semibold text-lg">Registered Users</h1>
          <hr/>
          <span>Total: {totalUsers}</span>
      </div>
    )
  }
  