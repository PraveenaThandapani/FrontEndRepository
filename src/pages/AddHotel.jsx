import { useState } from "react";

function AddHotel() {
  const [hotels, setHotels] = useState([]);

  const [hotel, setHotel] = useState({
    name: "",
    location: "",
    acPrice: "",
    nonAcPrice: "",
    amenities: "",
  });

  const [editIndex, setEditIndex] = useState(null);

  // handle input
  const handleChange = (e) => {
    setHotel({ ...hotel, [e.target.name]: e.target.value });
  };

  // add / update
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...hotels];
      updated[editIndex] = hotel;
      setHotels(updated);
      setEditIndex(null);
    } else {
      setHotels([...hotels, hotel]);
    }

    // reset form
    setHotel({
      name: "",
      location: "",
      acPrice: "",
      nonAcPrice: "",
      amenities: "",
    });
  };

  // edit
  const handleEdit = (index) => {
    setHotel(hotels[index]);
    setEditIndex(index);
  };

  // delete
  const handleDelete = (index) => {
    const filtered = hotels.filter((_, i) => i !== index);
    setHotels(filtered);
  };

  return (
    <div className="container mt-5">
      <h2>Hotel Management</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="card p-4 shadow mb-4">

        <input
          className="form-control mb-2"
          name="name"
          placeholder="Hotel Name"
          value={hotel.name}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="location"
          placeholder="Location"
          value={hotel.location}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="acPrice"
          placeholder="AC Room Price"
          value={hotel.acPrice}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="nonAcPrice"
          placeholder="Non-AC Room Price"
          value={hotel.nonAcPrice}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="amenities"
          placeholder="Amenities"
          value={hotel.amenities}
          onChange={handleChange}
        />

        <button className="btn btn-primary">
          {editIndex !== null ? "Update Hotel" : "Add Hotel"}
        </button>
      </form>

      {/* TABLE */}
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>AC Price</th>
            <th>Non-AC Price</th>
            <th>Amenities</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {hotels.map((h, index) => (
            <tr key={index}>
              <td>{h.name}</td>
              <td>{h.location}</td>
              <td>{h.acPrice}</td>
              <td>{h.nonAcPrice}</td>
              <td>{h.amenities}</td>
              <td>
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

export default AddHotel;