import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useInputChange } from "../hooks/useInputChange";
import {postRequest} from "../services/apiRequests/postRequest";
import {useDispatch} from 'react-redux';
import { loginSuccess } from "../services/redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const initialFormData={
        usernameOrEmail:'',
        password:''
    }

    const{handleInputChange,formdata}=useInputChange(initialFormData);

    const{PostApi}=postRequest();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const session=await PostApi('/api/auth/login',formdata);
        if(session){
            dispatch(loginSuccess(session));
            navigate('/admindashboard');
            return
        }
    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-4 py-4">
        <div className="flex flex-col gap-2">
            <label>Username Or Email *</label>
            <input
                type="text"
                required
                name="usernameOrEmail"
                className="bg-gray-100 rounded-lg focus:outline-none px-2 py-2"
                value={formdata.usernameOrEmail}
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
            Login
        </Button>
        <div>
            <span>Don&apos;t have an account?</span>
            <Link to={'/registeruser'}>
                <span className="text-blue-500 px-2 hover:underline">Register</span>
            </Link>
        </div>
    </form>
  )
}
