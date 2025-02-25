import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { useActionState } from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import { toast } from "sonner";
import { Loader, Mail, Lock, Eye, EyeOff, UserPlus, User, ArrowLeft } from "lucide-react";
import UseUser from "@/hook/UseUser";
import { useState } from "react";

const SignUp = () => {
  const [register] = useRegisterMutation();
  const user = UseUser();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const [, formAction] = useActionState(
      async (_prevState: unknown, formData: FormData) => {
        try {
          setIsLoading(true)
          const userdata = Object.fromEntries(formData.entries());
          await register(userdata).unwrap();
          setIsLoading(false)
          toast.success("Registration successful! Please login.", {
            icon: "🎉",
          });
          navigate("/login")
        } catch (error: unknown) {
          setIsLoading(false)
          toast.error((error as Error)?.message || "Registration failed", {
            icon: "❌",
          });
        }
      },
      null
  );

  if (user) return <Navigate to="/" />;

  return (
      <div className="justify-center py-12 px-4 sm:px-6 lg:px-8  w-full min-h-screen flex items-center bg-[#010e28] bg-[linear-gradient(to_bottom,_#082740_1px,_transparent_1px),_linear-gradient(to_right,_#082740_1px,_transparent_1px)] [background-size:30px_30px] bg-center overflow-x-hidden animate-bgmove">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-5xl font-extrabold text-white uppercase">
              Create Account
            </h2>
            <p className="mt-2 text-sm text-white/90">
              Join us and start your journey
            </p>
          </div>
          <form className="mt-8 space-y-6" action={formAction} onSubmit={() => setIsLoading(true)}>
            <div className="rounded-3xl shadow-lg bg-white p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#04345c] mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="appearance-none rounded-xl relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#04345c] focus:border-[#04345c] focus:z-10 sm:text-sm transition-all duration-200"
                      placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#04345c] mb-1">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="appearance-none rounded-xl relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#04345c] focus:border-[#04345c] focus:z-10 sm:text-sm transition-all duration-200"
                      placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#04345c] mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      className="appearance-none rounded-xl relative block w-full pl-10 pr-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#04345c] focus:border-[#04345c] focus:z-10 sm:text-sm transition-all duration-200"
                      placeholder="Create a password"
                  />
                  <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    defaultChecked
                    className="h-4 w-4 text-[#04345c] focus:ring-[#04345c] border-gray-300 rounded transition-all duration-200"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the Terms and Privacy Policy
                </label>
              </div>

              <div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-[#04345c] hover:bg-[#048ed6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#04345c] transition-all duration-200"
                >
                  {isLoading ? (
                      <Loader className="animate-spin h-5 w-5" />
                  ) : (
                      <div className="flex items-center">
                        <UserPlus className="h-5 w-5 mr-2" />
                        Create Account
                      </div>
                  )}
                </button>
              </div>
            </div>

            <p className="flex justify-center items-center gap-2 text-center text-sm text-white/80">
              Already have an account?{" "}
              <Link
                  to="/login"
                  className="font-medium text-white hover:text-[#048ed6] inline-flex items-center transition-all duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to login
              </Link>
            </p>
          </form>
        </div>
      </div>
  );
};

export default SignUp;
