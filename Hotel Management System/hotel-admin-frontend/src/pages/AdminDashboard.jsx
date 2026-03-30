import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Admin Dashboard</h2>

      <div className="row">
        {/* Add Hotel */}
        <div className="col-md-6 mb-3">
          <div className="card p-4 shadow">
            <h4>Add Hotel</h4>
            <button
              className="btn btn-primary mt-3"
              onClick={() => navigate("/add-hotel")}
            >
              Go to Add Hotel
            </button>
          </div>
        </div>

        {/* Add Room */}
        <div className="col-md-6 mb-3">
          <div className="card p-4 shadow">
            <h4>Add Room</h4>
            <button
              className="btn btn-success mt-3"
              onClick={() => navigate("/add-room")}
            >
              Go to Add Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;