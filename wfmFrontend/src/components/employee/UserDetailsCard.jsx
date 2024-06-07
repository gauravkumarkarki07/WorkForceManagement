import { useSelector } from "react-redux"
import Button from "../Button";
import { Link } from "react-router-dom";
export default function UserDetailsCard() {
    const session=useSelector(state=>state.user.session);
  return (
    <div className="flex flex-col gap-2 shadow-md shadow-blue-200 rounded-md px-2 py-2 border w-full">
          <h1 className="font-semibold text-lg">Personal Details</h1>
          <hr/>
          <span>Name: {session.userDetails.firstname+" "+session.userDetails.lastname}</span>
          <span>Email: {session.userDetails.email}</span>
          <span>Username: {session.userDetails.username}</span>
          <Link to={'/profile'}>
            <Button variant={'secondary'} type="button">
                Edit Details
            </Button>
          </Link>
      </div>
  )
}
