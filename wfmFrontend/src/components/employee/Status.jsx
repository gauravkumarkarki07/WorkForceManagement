import { useSelector } from "react-redux"
export default function Status() {
    const session=useSelector(state=>state.user.session)
  return (
    <div className="flex flex-col gap-2 shadow-md shadow-blue-200 rounded-md px-2 py-2 border w-full">
          <h1 className="font-semibold text-lg">Status</h1>
          <hr/>
          <span>Is Employee: {session.userDetails.isEmployee ? ('yes'):('no') }</span>
          <span>Is Admin: {session.userDetails.isAdmin ? ('yes'):('no') }</span>

      </div>
  )
}
