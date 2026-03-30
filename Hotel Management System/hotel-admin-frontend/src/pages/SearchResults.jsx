import { useLocation } from "react-router-dom";

function SearchResults() {
  const location = useLocation();
  const searchData = location.state;

  // Dummy data (later connect backend)
  const rooms = [
    { hotel: "ABC Hotel", location: "Chennai", type: "Deluxe", price: 3000, isBooked: false },
    { hotel: "XYZ Hotel", location: "Madurai", type: "Suite", price: 4000, isBooked: true }
  ];

  // filter by location
  const filteredRooms = rooms.filter(
    (r) =>
      r.location.toLowerCase().includes(searchData.location.toLowerCase()) &&
      !r.isBooked
  );

  return (
    <div className="container mt-5">
      <h2>Available Rooms</h2>

      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Hotel</th>
            <th>Location</th>
            <th>Type</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {filteredRooms.map((r, index) => (
            <tr key={index}>
              <td>{r.hotel}</td>
              <td>{r.location}</td>
              <td>{r.type}</td>
              <td>{r.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredRooms.length === 0 && <p>No rooms available ❌</p>}
    </div>
  );
}

export default SearchResults;