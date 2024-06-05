import Button from "../components/Button";
import { useInputChange } from "../hooks/useInputChange";
import { useLocation, useNavigate } from "react-router-dom";
import { putRequest } from "../services/apiRequests/putRequest";

export default function AddEmployee() {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state.user || {}; 
    console.log(data)


    const initialFormData = {
        userId: data._id || '',
        name: `${data.firstname+" "+data.lastname || ''}`,
        employmentType: data.employmentType || '',
        position: data.position || '',
        department: data.department || '',
        isCertificateVerified: data.isCertificateVerified || '',
        salary: data.salary || ''
    };

    const { handleInputChange, formdata } = useInputChange(initialFormData);
    console.log(formdata)

    const { PutApi } = putRequest();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await PutApi(`/api/admin/approveemployee/${formdata.userId}`, formdata);
        if (response) {
            navigate('/employees');
        }
        console.log(formdata);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 px-4 py-4">
            <h2 className="font-semibold text-2xl">Employee Details</h2>
            <div className="flex w-full gap-4">
                <div className="flex flex-col gap-2 w-full">
                    <label>UserId *</label>
                    <input
                        type="text"
                        readOnly
                        required
                        name="userId"
                        className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                        value={formdata.userId}
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label>Name *</label>
                    <input
                        type="text"
                        readOnly
                        required
                        name="name"
                        className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                        value={formdata.name}
                    />
                </div>
            </div>
            <div className="flex w-full gap-4">
                <div className="flex flex-col gap-2 w-full">
                    <label>EmploymentType *</label>
                    <select
                        value={formdata.employmentType}
                        required
                        name="employmentType"
                        onChange={handleInputChange}
                        className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                    >
                        <option value="">--Select--</option>
                        <option value="fulltime">FullTime</option>
                        <option value="parttime">PartTime</option>
                        <option value="casual">Casual</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label>Position *</label>
                    <select
                        value={formdata.position}
                        required
                        onChange={handleInputChange}
                        name="position"
                        className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                    >
                        <option value="">--Select--</option>
                        <option value="Manager">Manager</option>
                        <option value="Staff">Staff</option>
                        <option value="Teacher">Teacher</option>
                    </select>
                </div>
            </div>
            <div className="flex w-full gap-4">
                <div className="flex flex-col gap-2 w-full">
                    <label>Department *</label>
                    <select
                        value={formdata.department}
                        required
                        onChange={handleInputChange}
                        name="department"
                        className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                    >
                        <option value="">--Select--</option>
                        <option value="HeadQuater">HeadQuater</option>
                        <option value="Fitness">Fitness</option>
                        <option value="General">General</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label>Is Certificate Verified *</label>
                    <select
                        value={formdata.isCertificateVerified}
                        required
                        onChange={handleInputChange}
                        name="isCertificateVerified"
                        className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                    >
                        <option value="">--Select--</option>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label>Salary *</label>
                <input
                    type="number"
                    required
                    name="salary"
                    placeholder="$ per hour"
                    className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                    value={formdata.salary}
                    onChange={handleInputChange}
                />
            </div>
            <Button type="submit">
                Add Employee
            </Button>
        </form>
    );
}
