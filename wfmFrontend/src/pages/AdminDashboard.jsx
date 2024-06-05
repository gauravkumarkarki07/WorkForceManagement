import TotalEmployeesCard from "../components/admin/TotalEmployeesCard";
import TotalUsersCard from "../components/admin/TotalUsersCard";

export default function AdminDashboard() {
  return (
    <div className="px-8 py-8">
        <section className="flex gap-4">
            <TotalEmployeesCard data={10}/>
            <TotalUsersCard/>

        </section>
    </div>
  )
}
