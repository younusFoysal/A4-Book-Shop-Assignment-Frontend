/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    acceptTerms: false,
  });

  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterMutation();

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      toast.error("All fields are required!");
      return;
    }
    if (!formData.acceptTerms) {
      toast.error("You must accept the Terms and Conditions!");
      return;
    }

    try {
      const response = await registerUser(formData).unwrap();
      console.log(response);
      if (response.statusCode === 201) {
        toast.success("Registration successful!");
        navigate("/login");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Registration failed!");
    }
  };

  return (
      <div className="font-[sans-serif] bg-white md:h-screen">
        <div className="grid md:grid-cols-2 items-center gap-8 h-full">
          <div className="max-md:order-1 p-4">
            <img
                src="https://readymadeui.com/signin-image.webp"
                className="lg:max-w-[85%] w-full h-full aspect-square object-contain block mx-auto"
                alt="login-image"
            />
          </div>

          <div className="flex items-center md:p-8 p-6 bg-[#154d22] h-full lg:w-11/12 lg:ml-auto">
            <form className="max-w-lg w-full mx-auto" onSubmit={handleSubmit}>
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white">
                  Create an account
                </h3>
              </div>

              <div>
                <label className="text-white text-xs block mb-2">Full Name</label>
                <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:white pl-2 pr-8 py-3 outline-none"
                    placeholder="Enter name"
                />
              </div>

              <div className="mt-8">
                <label className="text-white text-xs block mb-2">Email</label>
                <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:white pl-2 pr-8 py-3 outline-none"
                    placeholder="Enter email"
                />
              </div>

              <div className="mt-8">
                <label className="text-white text-xs block mb-2">Password</label>
                <input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:white pl-2 pr-8 py-3 outline-none"
                    placeholder="Enter password"
                />
              </div>

              <div className="flex items-center mt-8">
                <input
                    id="acceptTerms"
                    name="acceptTerms"
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="h-4 w-4 shrink-0 rounded"
                />
                <label
                    htmlFor="acceptTerms"
                    className="text-white ml-3 block text-sm"
                >
                  I accept the{" "}
                  <a
                      href="#"
                      className="text-white/80 font-semibold hover:underline ml-1"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>

              <div className="mt-8">
                <button
                    type="submit"
                    className="w-max shadow-xl py-3 px-6 text-sm text-white font-semibold rounded bg-green-500 hover:bg-green-600 focus:outline-none"
                    disabled={isLoading}
                >
                  {isLoading ? "Registering..." : "Register"}
                </button>
                <p className="text-sm text-white mt-8">
                  Already have an account?{" "}
                  <Link
                      to="/login"
                      className="text-white font-semibold hover:underline ml-1"
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Register;