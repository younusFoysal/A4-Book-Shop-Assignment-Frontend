import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { verifyToken } from "@/utils/VerifyToken";
import { useActionState } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader, Mail, Lock, Eye, EyeOff, LogIn, UserPlus } from "lucide-react";
import UseUser from "@/hook/UseUser";
import { useState } from "react";

const Login = () => {
  const [login, ] = useLoginMutation();
  const dispatch = useAppDispatch();
  const user = UseUser();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [state, formAction] = useActionState(
      async (_prevState: any, formData: FormData) => {
        try {
          setIsLoading(true)
          const userdata = Object.fromEntries(formData.entries());
          const res = await login(userdata).unwrap();
          const userData = verifyToken(res.data.token);
          setIsLoading(false)
          dispatch(setUser({ user: userData, token: res.data.token }));
          toast.success("Welcome back!", {
            icon: "👋",
          });
        } catch (error: any) {
          setIsLoading(false)
          toast.error(error?.message || "Invalid credentials", {
            icon: "❌",
          });
        }
      },
      null
  );

  //console.log(isLoading)

  if (user) return <Navigate to="/" />;

  return (

      <div className=" justify-center py-12 px-4 sm:px-6 lg:px-8   w-screen min-h-screen flex items-center bg-[#010e28] bg-[linear-gradient(to_bottom,_#082740_1px,_transparent_1px),_linear-gradient(to_right,_#082740_1px,_transparent_1px)] [background-size:30px_30px] bg-center overflow-x-hidden animate-bgmove">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            {/*<LogIn className="mx-auto h-12 w-12 text-[#04345c]" />*/}
            <h2 className="mt-6 text-5xl uppercase font-extrabold text-white">
              Welcome Back
            </h2>
            <p className="mt-2 text-md text-white/90">
              Sign in to your account to continue
            </p>
          </div>
          <form className="mt-8 space-y-6" action={formAction} onSubmit={() => setIsLoading(true)}>
            <div className="rounded-3xl shadow-lg bg-white/95 p-8 space-y-6">
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
                      placeholder="Enter your password"
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

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-[#04345c] focus:ring-[#04345c] border-gray-300 rounded transition-all duration-200"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-[#04345c] hover:text-[#048ed6] transition-all duration-200">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-[#04345c] hover:bg-[#048ed6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#04345c] transition-all duration-200"
                >
                  {isLoading ?  (
                      <Loader className="animate-spin h-5 w-5" />
                  ) : (
                      <div className="flex items-center">
                        <LogIn className="h-5 w-5 mr-2" />
                        Sign in
                      </div>
                  )}
                </button>
              </div>
            </div>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                  to="/signup"
                  className="font-medium text-[#04345c] hover:text-[#048ed6] inline-flex items-center transition-all duration-200"
              >
                <UserPlus className="h-4 w-4 mr-1" />
                Sign up now
              </Link>
            </p>
          </form>
        </div>
      </div>


  );
};

export default Login;
