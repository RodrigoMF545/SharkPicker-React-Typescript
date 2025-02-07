import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharkPicker from "../pages/SharkPicker";
import AdminSharks from "../pages/AdminSharks";
import NewSharkForm from "../pages/NewSharkForm";
import Navbar from "../components/Navbar";

function AppRoutes() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<SharkPicker />} />
        <Route path="/admin/sharks" element={<AdminSharks />} />
        <Route path="/admin/sharks/novo" element={<NewSharkForm />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
