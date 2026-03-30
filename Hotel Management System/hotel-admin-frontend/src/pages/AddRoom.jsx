import { useState } from "react";

function AddRoom() {
  const [rooms, setRooms] = useState([]);

  const [room, setRoom] = useState({
    hotelName: "",
    type: "",
    price: "",
    bedType: "",
    ac: "",
    isBooked: false,
    availableDates: [], // ✅ Add availableDates
  });

  const [editIndex, setEditIndex] = useState(null);
  const [filter, setFilter] = useState("");

  // handle input
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "availableDates") {
      // Split comma-separated dates into array
      setRoom({ ...room, availableDates: value.split(",").map(d => d.trim()) });
    } else {
      setRoom({ ...room, [name]: value });
    }
  };

  // add / update
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...rooms];
      updated[editIndex] = room;
      setRooms(updated);
      setEditIndex(null);
    } else {
      setRooms([...rooms, room]);
    }

    // reset
    setRoom({
      hotelName: "",
      type: "",
      price: "",
      bedType: "",
      ac: "",
      isBooked: false,
      availableDates: [],
    });
  };

  // edit
  const handleEdit = (index) => {
    setRoom(rooms[index]);
    setEditIndex(index);
  };

  // delete
  const handleDelete = (index) => {
    const updated = rooms.filter((_, i) => i !== index);
    setRooms(updated);
  };

  // toggle status
  const toggleStatus = (index) => {
    const updated = [...rooms];
    updated[index].isBooked = !updated[index].isBooked;
    setRooms(updated);
  };

  // filter
  const filteredRooms = rooms.filter((r) => {
    if (filter === "available") return !r.isBooked;
    if (filter === "booked") return r.isBooked;
    return true;
  });

  return (
    <div className="container mt-5">
      <h2>Room Management</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="card p-4 shadow mb-4">
        <input
          className="form-control mb-2"
          name="hotelName"
          placeholder="Hotel Name"
          value={room.hotelName}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="type"
          placeholder="Room Type"
          value={room.type}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="price"
          placeholder="Price"
          value={room.price}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="bedType"
          placeholder="Bed Type"
          value={room.bedType}
          onChange={handleChange}
        />

        <select
          className="form-control mb-2"
          name="ac"
          value={room.ac}
          onChange={handleChange}
        >
          <option value="">AC / Non-AC</option>
          <option value="AC">AC</option>
          <option value="Non-AC">Non-AC</option>
        </select>

        {/* ✅ Available Dates Input (comma-separated) */}
        <input
          className="form-control mb-3"
          name="availableDates"
          placeholder="Available Dates (YYYY-MM-DD, comma separated)"
          value={room.availableDates.join(", ")}
          onChange={handleChange}
        />

        <button className="btn btn-success">
          {editIndex !== null ? "Update Room" : "Add Room"}
        </button>
      </form>

      {/* FILTER */}
      <select
        className="form-control mb-3"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All Rooms</option>
        <option value="available">Available</option>
        <option value="booked">Booked</option>
      </select>

      {/* TABLE */}
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Hotel</th>
            <th>Type</th>
            <th>Price</th>
            <th>Bed</th>
            <th>AC</th>
            <th>Status</th>
            <th>Available Dates</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredRooms.map((r, index) => (
            <tr key={index}>
              <td>{r.hotelName}</td>
              <td>{r.type}</td>
              <td>{r.price}</td>
              <td>{r.bedType}</td>
              <td>{r.ac}</td>
              <td>{r.isBooked ? "Booked ❌" : "Available ✅"}</td>
              <td>{r.availableDates.join(", ")}</td>
              <td>
                <button
                  className="btn btn-info btn-sm me-2"
                  onClick={() => toggleStatus(index)}
                >
                  Toggle
                </button>

                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddRoom;