import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  // get role from Welcome page
  const role = location.state?.role || "USER";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "ADMIN") {
      // ADMIN LOGIN CHECK
      if (email === "admin@hotel.com" && password === "Admin@123") {
        localStorage.setItem("role", "ADMIN");
        navigate("/admin-dashboard");
      } else {
        alert("Invalid Admin Credentials ❌");
      }
    } else {
      // USER LOGIN
      if (email && password) {
        localStorage.setItem("role", "USER");
        navigate("/user-dashboard");
      } else {
        alert("Enter valid user details ❌");
      }
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow" style={{ width: "350px" }}>

        {/* Dynamic Heading */}
        <h3 className="text-center mb-3">
          {role === "ADMIN" ? "Admin Login 🧑‍💼" : "User Login 👤"}
        </h3>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;