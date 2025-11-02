import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import Welcome from "./welcome"; 

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false); 

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    // ✅ Strong password validation
    const strongPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    } else if (!strongPassword.test(formData.password)) {
      newErrors.password =
        "Password must include uppercase, lowercase, number, and special character (e.g. $543bfkj).";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowWelcome(true); // ✅ show alert
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // hide after 2 seconds
      setTimeout(() => {
        setShowWelcome(false);
      }, 2000);
    }
  };

  return (
    <>
      {showWelcome && <Welcome props="Signup" />} {/* ✅ show only on success */}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-semibold text-black">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-[black]/30 bg-white rounded-sm p-2 focus:outline-none  focus:border-[#FF8400]  text-black"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold text-black">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-[black]/30 bg-white rounded-sm p-2 focus:outline-none  focus:border-[#FF8400]  text-black"
            placeholder="example@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block font-semibold text-black">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-[black]/30 bg-white rounded-sm p-2 focus:outline-none focus:border-[#FF8400]  text-black"
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
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <label className="block font-semibold text-black">
            Confirm Password
          </label>
          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border border-[black]/30 bg-white rounded-sm p-2 focus:outline-none  focus:border-[#FF8400]  text-black"
            placeholder="Re-enter password"
          />
          <button
            type="button"
            className="absolute right-3 top-9 text-sm text-black hover:underline"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? (
              <EyeOff className="hover:text-[#FF8400]" />
            ) : (
              <Eye className="hover:text-[#FF8400]" />
            )}
          </button>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#FF8400] text-white py-2 rounded-sm hover:bg-[#e47702] transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Signup;
