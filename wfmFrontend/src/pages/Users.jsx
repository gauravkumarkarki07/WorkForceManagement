import { useEffect, useState } from "react";
import UserDetailsTable from "../components/UserDetailsTable";
import { getRequest } from "../services/apiRequests/getRequest";

export default function Users() {
  const [userDetails, setUsersDetails] = useState([]);
  const { GetApi } = getRequest();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await GetApi('/api/admin/getallusers');
      if (response) {
        setUsersDetails(response.users);
      }
    };

    fetchUsers();
    console.log(userDetails)
  }, []);

  return (
    <div className="flex flex-col gap-2 px-4 py-2">
      <h2 className="font-semibold text-2xl">All Registered Users</h2>
      <div>
        <UserDetailsTable users={userDetails} />
      </div>
    </div>
  );
}
