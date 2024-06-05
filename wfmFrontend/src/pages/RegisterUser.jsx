import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useInputChange } from "../hooks/useInputChange";
import {postRequest} from "../services/apiRequests/postRequest";
import { useNavigate } from "react-router-dom";

export default function RegisterUser() {

  const navigate=useNavigate();

    const initialFormData={
        username:'',
        password:'',
        firstname:'',
        lastname:'',
        address:'',
        phonenumber:'',
        email:''
    }

    const{handleInputChange,formdata}=useInputChange(initialFormData);

    const{PostApi}=postRequest();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await PostApi('/api/auth/registeruser',formdata);
        if(response){
          navigate('/login');
          return
        }
    }

  return (
    <div className="w-full flex justify-center items-center py-14">
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-4 py-4">
    <h1 className="text-2xl font-semibold text-blue-800">Register your account</h1>
    <span className="text-gray-500">Only after admin verifies your account, you will be able to use the system</span>
      <div className="flex gap-2">
        <div className="flex flex-col gap-2 w-full">
            <label>First Name *</label>
            <input
                type="text"
                required
                name="firstname"
                className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                value={formdata.firstname}
                onChange={handleInputChange}
            />
        </div>
        <div className="flex flex-col gap-2 w-full">
            <label>Last Name *</label>
            <input
                type="text"
                required
                name="lastname"
                className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                value={formdata.lastname}
                onChange={handleInputChange}
            />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col gap-2 w-full">
            <label>Email *</label>
            <input
                type="email"
                required
                name="email"
                className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                value={formdata.email}
                onChange={handleInputChange}
            />
        </div>
        <div className="flex flex-col gap-2 w-full">
            <label>Phone Number </label>
            <input
                type="number"
                required
                name="phonenumber"
                className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                value={formdata.phonenumber}
                onChange={handleInputChange}
            />
        </div>
      </div>
      <div className="flex flex-col gap-2">
            <label>Address *</label>
            <input
                type="text"
                required
                name="address"
                className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                value={formdata.address}
                onChange={handleInputChange}
            />
        </div>
        <div className="flex flex-col gap-2">
            <label>Username *</label>
            <input
                type="text"
                required
                name="username"
                className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                value={formdata.username}
                onChange={handleInputChange}
            />
        </div>
        <div className="flex flex-col gap-2">
            <label>Password *</label>
            <input
                type="password"
                required
                name="password"
                className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                value={formdata.password}
                onChange={handleInputChange}
            />
        </div>
        <Button>
            Register
        </Button>
        <div>
            <span>Already have an account?</span>
            <Link to={'/login'}>
                <span className="text-blue-500 px-2 hover:underline">Sign In</span>
            </Link>
        </div>
    </form>
    </div>
  )
}
