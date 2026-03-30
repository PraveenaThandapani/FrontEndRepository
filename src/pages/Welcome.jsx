import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="text-center p-5 shadow rounded bg-white" style={{ width: "400px" }}>
        
        <h2 className="mb-3">🏨 Hotel Booking System</h2>
        <p className="text-muted mb-4">Choose your role to continue</p>

        <div className="d-grid gap-3">

          {/* USER LOGIN */}
          <button
            className="btn btn-success"
            onClick={() => navigate("/login", { state: { role: "USER" } })}
          >
             User Login
          </button>

          {/* ADMIN LOGIN */}
          <button
            className="btn btn-primary"
            onClick={() => navigate("/login", { state: { role: "ADMIN" } })}
          >
             Admin Login
          </button>

          {/* REGISTER */}
          <button
            className="btn btn-outline-dark"
            onClick={() => navigate("/register")}
          >
             Register
          </button>

        </div>
      </div>
    </div>
  );
}

export default Welcome;