import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import "../styles/Login.css";

function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await loginUser({

        email,

        password

      });

      if (response.success) {

        localStorage.setItem("token", response.token);

        login(response.user);

        alert("Login Successful!");

        navigate("/");

      } else {

        alert(response.message);

      }

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <section className="login-page">

      <div className="login-card">

        <h2>🔐 Login</h2>

        <p className="login-text">

          Welcome back to Tripora

        </p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">

            Login

          </button>

        </form>

        <p className="register-link">

          Don't have an account?

          <Link to="/register">

            Register

          </Link>

        </p>

      </div>

    </section>

  );

}

export default Login;