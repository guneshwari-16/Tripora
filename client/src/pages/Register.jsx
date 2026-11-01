import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";
import "../styles/Register.css";

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (user.password !== user.confirmPassword) {

      alert("Passwords do not match!");

      return;

    }

    try {

      const response = await registerUser({
        name: user.name,
        email: user.email,
        password: user.password
      });

      alert(response.message || "Registration Successful!");

      navigate("/login");

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <section className="register-page">

      <div className="register-card">

        <h2>📝 Create Account</h2>

        <p className="register-text">

          Join Tripora and save your travel plans.

        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={user.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={user.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">

            Register

          </button>

        </form>

        <p className="login-link">

          Already have an account?

          <Link to="/login">

            Login

          </Link>

        </p>

      </div>

    </section>

  );

}

export default Register;