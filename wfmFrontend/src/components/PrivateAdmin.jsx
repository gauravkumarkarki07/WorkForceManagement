import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export default function PrivateAdmin() {

    const session=useSelector(state=>state.user.session)

  return session.userDetails.isAdmin ? <Outlet/> : <Navigate to={'/dashboard'}/>
}
