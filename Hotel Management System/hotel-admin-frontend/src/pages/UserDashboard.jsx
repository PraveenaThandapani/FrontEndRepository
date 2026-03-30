import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserDashboard() {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const dummyHotels = [
    { name: "ABC Hotel", location: "Chennai", roomType: "Deluxe", rating: 4.5, isBooked: false, availableDates: ["2026-03-30","2026-03-31"] },
    { name: "Grand Stay", location: "Chennai", roomType: "Standard", rating: 4.0, isBooked: false, availableDates: ["2026-03-29","2026-03-30"] },
    { name: "XYZ Hotel", location: "Madurai", roomType: "Suite", rating: 4.2, isBooked: false, availableDates: ["2026-03-30","2026-03-31"] }
  ];

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get("http://localhost:8080/api/hotels/search", { params: { location, date } });
      let data = res.data || dummyHotels;

      const filtered = data.filter(
        (h) =>
          h.location.toLowerCase().includes(location.toLowerCase()) &&
          h.isBooked === false &&
          h.availableDates?.includes(date)
      );

      setResults(filtered);

    } catch (error) {
      const filtered = dummyHotels.filter(
        (h) =>
          h.location.toLowerCase().includes(location.toLowerCase()) &&
          h.isBooked === false &&
          h.availableDates?.includes(date)
      );
      setResults(filtered);
    }
  };

  // ✅ Navigate to booking page
  const handleBookNow = (hotel) => {
    navigate("/booking", { state: { hotel, date } });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Search Hotels 🏨</h2>

      <form onSubmit={handleSearch} className="card p-4 shadow mb-4">
        <input className="form-control mb-3" placeholder="Enter Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
        <input type="date" className="form-control mb-3" value={date} onChange={(e) => setDate(e.target.value)} required />
        <button className="btn btn-primary w-100">Search</button>
      </form>

      <div className="row">
        {results.length === 0 ? (
          <p className="text-center text-danger">No available hotels ❌</p>
        ) : (
          results.map((hotel, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow">
                <div className="card-body">
                  <h5>{hotel.name}</h5>
                  <p>📍 {hotel.location}</p>
                  <p>🛏 {hotel.roomType}</p>
                  <p>⭐ {hotel.rating}</p>

                  <span className="badge bg-success mb-2">Available ✅</span>

                  <button className="btn btn-success w-100" onClick={() => handleBookNow(hotel)}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default UserDashboard;