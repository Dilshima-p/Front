import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Boxes from "./Pages/Boxes";
import Seller from "./Pages/Seller";
import Buyer from "./Pages/Buyer";
import Profile from "./Pages/Profile";
import Confirm from "./Pages/Confirm";
import Edit from "./Pages/Edit";
import Transaction from "./Pages/Transaction";
import Otp from "./Pages/Otp";
import ResetPassword from "./Pages/ResetPassword";
import Login from "./Pages/Login";
import Delete from "./Pages/Delete";
import Agent from "./Pages/Agent";


function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="profile" element={<Profile />} />
      <Route path="edit" element={<Edit />} />

      {/* Protected Layout Routes */}
      <Route path="/" element={<Layout />}>
        
        <Route path="box" element={<Boxes />} />
        <Route path="sell" element={<Seller />} />
        <Route path="buyer" element={<Buyer />} />
        <Route path="agent" element={<Agent/>} />
        <Route path="confirm" element={<Confirm />} />
        
        <Route path="tr" element={<Transaction />} />
        <Route path="delete" element={<Delete />} />
      </Route>
    </Routes>
  );
}

export default App;


