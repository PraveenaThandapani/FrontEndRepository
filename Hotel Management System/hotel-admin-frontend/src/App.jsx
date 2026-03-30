import { Routes, Route } from "react-router-dom";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AddHotel from "./pages/AddHotel";
import AddRoom from "./pages/AddRoom";
import SearchResults from "./pages/SearchResults";
import UserDashboard from "./pages/UserDashboard";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <Routes>
      {/* COMMON */}
      <Route path="/" element={<Welcome />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* ADMIN */}
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/add-hotel" element={<AddHotel />} />
      <Route path="/add-room" element={<AddRoom />} />

      {/* USER */}
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/search-results" element={<SearchResults />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  );
}

export default App;