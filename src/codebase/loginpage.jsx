import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulated auth check
    if (username === "admin" && password === "student") {
      setIsLoggedIn(true); 
      navigate("/dashboard"); // Redirect to dashboard after login
    } else {
      alert("Invalid credentials");
    }
  };

   const handleCVClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-2">Login</h2>
        <p className="mb-5">Enter your Username and Password</p>
        <p className="mb-1">Username</p>
        <input
          type="text"
          placeholder="admin"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded"
        />
        <p className="mb-1">Password</p>
        <input
          type="password"
          placeholder="student"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded"
        />
        <div className="flex">
          <button type="button" onClick={handleCVClick} className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded w-full mr-2">
            Back
          </button>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Login
        </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
