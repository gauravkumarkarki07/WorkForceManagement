import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RegisterUser from "./pages/RegisterUser";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute";
import LayoutPage from "./components/LayoutPage";

export default function App() {
  return (
    <>
      <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} stacked />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/*" element={<LayoutPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registeruser" element={<RegisterUser />} />
      </Routes>
    </>
  );
}
