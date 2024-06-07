import Status from "../components/employee/Status";
import UserDetailsCard from "../components/employee/UserDetailsCard";

export default function Dashboard() {
  return (
    <div className="px-8 py-8">
        <section className="flex gap-4">
        <UserDetailsCard/>
        <Status/>
        </section>
    </div>
  )
}
