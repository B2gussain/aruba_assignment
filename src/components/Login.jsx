import React, { useState } from "react";
import { EyeOff, Eye } from "lucide-react";
import Welcome from "./Welcome";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false); // 👈 state for showing alert

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(data.email)) {
      setError("Please enter a valid email address.");
    } else if (data.password.length < 6) {
      setError("Password must be at least 6 characters long.");
    } else {
      setError("");
      setShowWelcome(true); // 👈 show success alert
      setData({ email: "", password: "" });

      // Hide alert after 2 seconds
      setTimeout(() => {
        setShowWelcome(false);
      }, 2000);
    }
  };

  return (
    <>
      {showWelcome && <Welcome props="Login" />} {/* 👈 show conditionally */}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block font-semibold text-black">Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="w-full border border-[black]/30 bg-white rounded-sm p-2 focus:outline-none focus:border-[#FF8400] text-black"
            placeholder="example@email.com"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block font-semibold text-black">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={data.password}
            onChange={handleChange}
            className="w-full border border-[black]/30 bg-white rounded-sm p-2 focus:outline-none focus:border-[#FF8400] text-black"
            placeholder="Enter password"
          />
          <button
            type="button"
            className="absolute right-3 top-9 text-sm text-black hover:underline"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="hover:text-[#FF8400]" />
            ) : (
              <Eye className="hover:text-[#FF8400]" />
            )}
          </button>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-[#FF8400] text-white py-2 rounded-sm hover:bg-[#e47702] transition duration-300"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
