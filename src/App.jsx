import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignUp from "./Pages/SignUp";
import ProviderDashboard  from "./Pages/ProviderAccount/ProviderDashboard";
import UserDashboard  from "./Pages/UserAccount/UserDashboard";
// import Management from "./Pages/ProviderAccount/Management";
import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Pages/Login";
import EmptyUser from "./Pages/UserAccount/EmptyUser";
import MedInfo from "./Pages/UserAccount/MedInfo";


function App() {
  

  return (
    <>
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/providerdashboard" element={<ProviderDashboard />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/emptyuser" element={<EmptyUser/>} />
          <Route path="/medinfo" element={<MedInfo/>} />
          {/* <Route path="/management" element={<Management />} /> */}
          </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
