import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.placeholder.toLowerCase().replace(" ", "")]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // ✅ CHECK PASSWORD MATCH
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    alert("Registered Successfully ✅");

    navigate("/login");
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Register</h3>

        <form onSubmit={handleRegister}>
          <input
            className="form-control mb-3"
            placeholder="Name"
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          {/* ✅ CONFIRM PASSWORD */}
          <input
            className="form-control mb-3"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />

          <button className="btn btn-success w-100 mb-2">
            Register
          </button>
        </form>

        <button
          className="btn btn-outline-primary w-100"
          onClick={() => navigate("/login")}
        >
          Already have an account? Login
        </button>
      </div>
    </div>
  );
}

export default Register;

