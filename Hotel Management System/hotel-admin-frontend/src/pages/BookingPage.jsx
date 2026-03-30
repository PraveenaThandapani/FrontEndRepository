import { useLocation } from "react-router-dom";
import { useState } from "react";

function BookingPage() {
  const { state } = useLocation();
  const { hotel, date } = state || {};
  const [booked, setBooked] = useState(false);

  if (!hotel) return <p>No hotel selected</p>;

  const handleConfirmBooking = () => {
    // You can call backend here to actually book
    setBooked(true);
  };

  return (
    <div className="container mt-5">
      <h2>Booking Page 🏨</h2>

      <div className="card p-4 shadow mt-3">
        <h4>{hotel.name}</h4>
        <p>📍 {hotel.location}</p>
        <p>🛏 {hotel.roomType}</p>
        <p>⭐ {hotel.rating}</p>
        <p>Selected Date: {date}</p>

        {booked ? (
          <div className="alert alert-success mt-3">
            Booking Successful ✅
          </div>
        ) : (
          <button className="btn btn-primary mt-3" onClick={handleConfirmBooking}>
            Confirm Booking
          </button>
        )}
      </div>
    </div>
  );
}

export default BookingPage;