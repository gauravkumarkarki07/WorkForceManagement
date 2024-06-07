import Button from "../components/Button";
import { useSelector } from "react-redux";

export default function Profile() {
    const session=useSelector(state=>state.user.session);
  return (
    <div className="w-full flex justify-center items-center">

    <form className="flex flex-col gap-4 px-4 py-4 w-[60%]">
        <h1 className="text-2xl font-semibold text-blue-800">Your Personal Details</h1>
        <div className="flex gap-2">

            <div className="flex flex-col gap-2 w-full">
                <label>First Name</label>
                <input
                    type="text"
                    required
                    name="firstname"
                    className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                    value={session.userDetails.firstname}
                />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label>Last Name</label>
                <input
                    type="text"
                    required
                    name="lastname"
                    className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                    value={session.userDetails.lastname}
                    />
            </div>
        </div>
        <div className="flex gap-2">

            <div className="flex flex-col gap-2 w-full">
                <label>Phone Number</label>
                <input
                    type="text"
                    required
                    name="firstname"
                    className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                    value={session.userDetails.phonenumber}
                />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label>Email</label>
                <input
                    type="text"
                    required
                    name="lastname"
                    className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                    value={session.userDetails.email}
                    />
            </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
                <label>Address</label>
                <input
                    type="text"
                    required
                    name="lastname"
                    className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                    value={session.userDetails.address}
                    />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label>Username</label>
                <input
                    type="text"
                    required
                    name="lastname"
                    className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                    value={session.userDetails.username}
                    />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label>Confirm Password</label>
                <input
                    type="password"
                    name="lastname"
                    className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                    />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label>New Password</label>
                <input
                    type="password"
                    name="lastname"
                    className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                    />
            </div>
        <Button variant="warning">
            Update
        </Button>
    </form>
    </div>
  )
}
