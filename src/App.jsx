import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignUp from "./Pages/SignUp";
import ProviderDashboard  from "./Pages/ProviderAccount/ProviderDashboard";
import UserDashboard  from "./Pages/UserAccount/UserDashboard";
import Management from "./Pages/ProviderAccount/Management";
import 'react-calendar/dist/Calendar.css';


function App() {
  

  return (
    <>
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/providerdashboard" element={<ProviderDashboard />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/management" element={<Management />} />
          </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
